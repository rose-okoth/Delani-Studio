$(document).ready(function() {
    $(".clickable").click(function() {
      $(".icon-showing").toggle();
      $(".description-showing").toggle();
    });
  });
  
  $(document).ready(function(){
    $(".content").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });

  $(document).ready(function(){
    $(".contact").submit(function(){
      alert("Submitted");
    });
  });