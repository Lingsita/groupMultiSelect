(function($){
    $.fn.groupMultiSelect = function(config) {

        var self = this;
        self.settings = $.extend({
            // These are the defaults.
            options: null,
            placeholder: "Group Select",
            onChange: function (parent, children) {
            },
            initial:null
        }, config );
        var html = "<div class='groupSelect'><div class='select-arrow-down'></div><div class='select'><div class='placeholder'> "+self.settings.placeholder+"</div></div><div class='options group-select-hide'>";
        $.each(self.settings.options, function(i){
            var id_parent = this.label.toLowerCase().replace(/ /g,'-')
            html += "<div><input type='radio' name='parent' class='group-select-option' id='id_parent_"+i+"' value='"+this.label+"'><label for='id_parent_"+i+"'>"+this.label+"</label>";
            if(this.subItems.length>0){
                html+="<div class='subitem-group "+id_parent+"' style='display: none'>";
                $.each(this.subItems, function(index){
                    html += "<div class='subitem'><input type='checkbox' id='subitem_"+id_parent+"_"+index+"' class='group-select-option-subitem' data-parent='"+id_parent+"' value='"+this+"'><label for='subitem_"+id_parent+"_"+index+"'>"+this+"</label></div>";
                })
                html+="</div>";
            }
            html+="</div>";
        });
        html+= "</div></div></div>"
        $( this ).html(html);

        return this.each(function () {


            $(document).click(function(event) {
                if(!$(self).find(event.target).closest('.groupSelect').length) {
                    $(self).find(".options").slideUp('fast');
                }else{
                    if($(self).find(event.target).closest('.select').length) {
                        $(self).find(".options").slideToggle('fast');
                    }else{
                        $(self).find(".options").slideDown('fast');
                    }
                }
            });
            $(self).find("input[name='parent']").on('change', function(){
                var valor = $(this).val();
                var parent = valor.toLowerCase().replace(/ /g,'-');
                $(self).find('.'+parent).css('display', 'block');
                $(self).find('.subitem-group').each(function () {
                    if(!$( this ).hasClass(parent)) {
                        $(this).css('display', 'none');
                    }
                });
                $(self).find('.select').html('<div class="group-selection"><div class="parent">'+valor+'</div><div class="children"></div></div>')
                $(self).find('.options').find('[data-parent="'+parent+'"]').each(function () {
                    $(this).prop('checked', false);
                });
                self.settings.onChange(valor, []);
            });

            $(self).find(".group-select-option-subitem").on('change', function(){
                var parent = $(this).data('parent')
                var parent_label = $(self).find('.select').find('.group-selection').find(".parent").text()
                var children = []
                $(self).find('.'+parent).find("[data-parent='"+parent+"']").each(function () {
                    if($(this).is(':checked') == true){
                        children.push($(this).val());
                    }
                });
                var selected = "";
                $.each(children, function () {
                    selected += "<div class='subitem-label'>"+this+"</div>";
                });

                $(self).find('.select').find('.group-selection').find('.children').html(selected);

                self.settings.onChange($(self).find('.select').find('.group-selection').find('.parent').text(), children);
            });
            if(self.settings.initial){
                $.each(self.settings.options, function () {
                    if (this.label == self.settings.initial.parent){
                        $(self).find("input[value='"+self.settings.initial.parent+"']").prop("checked", true);
                        $(self).find("input[value='"+self.settings.initial.parent+"']").trigger('change');
                        var subItems = this.subItems;
                        $.each(self.settings.initial.children, function (index, value) {
                            console.log(subItems)
                            var child = $(self).find("input[value='"+value+"']").prop("checked", true);
                            if(subItems.indexOf(value)!=-1){
                                $(self).find("input[value='"+value+"']").prop("checked", true);
                                $(self).find(".group-select-option-subitem").trigger('change');
                            }

                        })
                    }
                })
            }
        })

    };
})(jQuery);
