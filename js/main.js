$(document).ready(function() {
	$("input").focus(function(){
    $(this).css("background-color","white");
  });
  
  $("input").blur(function(){
    $(this).css("background-color","#2d2735");
  });

  $(".foto").click(function() {
    $(this).css("-webkit-filter","grayscale(100%)");
  });

  $(".flor").mouseenter(function(){
    $(this).css("-webkit-filter","blur(5px)");
  });
  
  $(".flor").mouseleave(function(){
     $(this).css("-webkit-filter","blur(0px)");
  });

});