$(document).ready(function() {

  $(".menuIcon").click(function() {
    $(".navbar").slideToggle();
  });

  $('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });

});
