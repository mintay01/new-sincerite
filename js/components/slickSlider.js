import $ from "jquery";
import "slick-carousel";

function slickSlider() {
    $(".slick-slider").slick({
        swipe: false,
        variableWidth: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,

        prevArrow: $(".voice__swiper-button-prev"),
        nextArrow: $(".voice__swiper-button-next"),

        dots: true,
        appendDots: $(".slider-pagination"),
    });
    $(".popular__swiper").slick({
        swipe: false,
        variableWidth: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,

        prevArrow: $(".popular-button-prev"),
        nextArrow: $(".popular-button-next"),

        dots: true,
        appendDots: $(".popular-pagination"),
    });
}

export { slickSlider };