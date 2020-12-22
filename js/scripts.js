$(document).ready(function() {
    $(".clickable").click(function() {
      $(".icon-showing").toggle();
      $(".description-showing").toggle();
    });
  });
  
  $(document).ready(function(){
    $(".content").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "black");
    });
  });

  $(document).ready(function(){
    $(".contact").submit(function(){
      alert("Your message has been received. Thank you for reaching out.");
      event.preventDefault();
    });
  });