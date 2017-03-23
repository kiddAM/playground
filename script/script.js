// slideshow auto rotate
$(document).ready(function() {

  var slides = $('.slideshow-container').children('.mySlides');
  var i = 0;
  var slideshow;

  // for slideshow
  var slide_rotation = function() {

    $(slides[i]).fadeOut(function() {

      i++;

      $('.mySlides').removeClass('current');

      $(slides[i]).fadeIn().addClass('current');
    });

    if (i == slides.length-1) {i = -1} // reset back to beginning
  };


  slideshow = setInterval(slide_rotation, 8000);
});