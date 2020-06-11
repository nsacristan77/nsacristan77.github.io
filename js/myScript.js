$(document).ready(function() {

  $(".menuIcon").click(function() {
    $(".navbar").slideToggle();
  });

  $('.golden-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
  });

});
