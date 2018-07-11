 $(document).ready(function () {
			
$(".icheckbox_square-grey,.iradio_square-grey").click(function(){

if ($(this).hasClass("checked")) {
  $(this).removeClass("checked");
}
else{
$(this).parents("th").find("div").removeClass("checked");
$(this).parents(".form-group").find("div").removeClass("checked");
$(this).addClass("checked");
}

});
//------------------------------//
        });