(function($){
    $.fn.groupMultiSelect = function(config) {

        this.parentValue = '';
        this.childrenValue = '';

        var settings = $.extend({
            // These are the defaults.
            options: {},
            placeholder: "Group Select",
            onChange: function (parent, children) {
            }
        }, config );

        var html = "<div class='groupSelect'><div class='select'><div class='placeholder'> "+settings.placeholder+"</div></div><div class='options group-select-hide'>";
        $.each(settings.options, function(i){
            var id_parent = this.label.toLowerCase().replace(/ /g,'-')
            html += "<div><input type='radio' name='group-select' class='group-select-option' id='id_parent_"+i+"' value='"+this.label+"'><label for='id_parent_"+i+"'>"+this.label+"</label>";
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
        $(document).click(function(event) {
            if(!$(event.target).closest('.groupSelect').length) {
                $(".options").slideUp('fast');
            }else{
                if($(event.target).closest('.select').length) {
                    $(".options").slideToggle('fast');
                }else{
                    $(".options").slideDown('fast');
                }
            }
        });
        $(".group-select-option").on('click', function(){
            var valor = $(this).val();
            var parent = valor.toLowerCase().replace(/ /g,'-');
            $('.'+parent).css('display', 'block');
            $('.subitem-group').each(function () {
                if(!$( this ).hasClass(parent)) {
                    $(this).css('display', 'none');
                }
            });
            $('.select').html('<div class="group-selection"><div class="parent">'+valor+'</div><div class="children"></div></div>')
            $('.options').find('[data-parent="'+parent+'"]').each(function () {
               $(this).prop('checked', false);
            });
            settings.onChange(valor, []);
        });

        $(".group-select-option-subitem").on('change', function(){
            var parent = $(this).data('parent')
            var parent_label = $('.select').find('.group-selection').find(".parent").text()
            var children = []
            $('.'+parent).find("[data-parent='"+parent+"']").each(function () {
                if($(this).is(':checked') == true){
                    children.push($(this).val());
                }
            });
            var selected = "";
            visible_children = $.each(children, function () {
                selected += "<div class='subitem-label'>"+this+"</div>";
            });

            $('.select').find('.group-selection').find('.children').html(selected);

            settings.onChange($('.select').find('.group-selection').find('.parent').text(), children);
        });

        return this

    };
})(jQuery);
