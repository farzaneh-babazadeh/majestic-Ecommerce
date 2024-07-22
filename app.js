// Activate Carousel
$("#carouselExample").carousel();



// Enable Carousel Controls
$(".left").click(function(){
  $("#carouselExample").carousel("prev");
});
$(".left").click(function(){
    $("#carouselExample").carousel("next");
  });