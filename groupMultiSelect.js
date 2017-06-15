$.fn.groupMultiSelect = function(config) {

  var html = "<div class='groupSelect'><div class='select'>--------</div><div class='options'>";
  $.each(config.options, function(){
    html += "<div class='group-select'><input type='checkbox' class='group-select-option' value='"+this.label+"'>"+this.label;
    $.each(this.subItems, function(){
      html += "<div class='subitem'><input type='checkbox' class='group-select-option-subitem' value='"+this+"'>"+this+"</div>";
    })
    html+="</div>";
  });
  html+= "</div></div></div>"
  $( this ).html(html);
  $(".select").on('click', function(){
    if($(".options").hasClass('group-select-hide')){
      $(".options").removeClass('group-select-hide');
    }else{
      $(".options").addClass('group-select-hide');
    }
  });
  $(document).click(function(event) {
    if(!$(event.target).closest('.groupSelect').length) {
      $(".options").addClass('group-select-hide');
    }else{
      $(".options").removeClass('group-select-hide');
    }
  });
  $(".group-select-option").on('click', function(){
    var valor = $(this).val();
    $('.select').html('<div class="group-selection">'+valor+'</div>')
  });
  this.val = function(){
    return this.html();
  }
  return this;
};
