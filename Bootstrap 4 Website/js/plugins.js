// Give The Slide The Rest Of The Screen
$(function () {
    'use strict';
    // Adjust Slider Height
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height( winH - ( upperH + navH ) )
});