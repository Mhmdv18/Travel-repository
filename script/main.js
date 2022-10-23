$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        // speed: 900,
        prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='images/icon_slide.svg' alt='prew'></button>",
        nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='images/icon_slide_2.svg' alt='next'></button>"
 });
}); 