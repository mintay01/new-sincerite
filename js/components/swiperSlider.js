import Swiper from "swiper/bundle";
function swiperSlider() {
    if (window.innerWidth > 768) {
        const popular = new Swiper(".popular__swiper", {
            // Default parameters
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        popular;
    }


    var voice = new Swiper(".voice__swiper", {
        slidesPerView: 4.47,
        // slidesPerView: 4,
        stopOnLastSlide: false,
        // loopedSlides: 3,
        spaceBetween: 60,
        // centerInsufficientSlides: true,
        // watchSlidesProgress: true,
        loop: true,
        // centeredSlides: true,
        // slidesPerGroupSkip: 2,

        autoplay: {
            delay: 1500,
        },

        pagination: {
            el: ".swiper-pagination2",
            type: "bullets",
        },
        navigation: {
            nextEl: ".voice__swiper-button-next",
            prevEl: ".voice__swiper-button-prev",
        },
    });
    voice;
    var swiper = new Swiper(".mySwiper", {
        speed: 1000,
        loop:true,
        effect: "fade",
        autoplay: {
            delay: 1000,
        },
    });
    swiper;
}
export { swiperSlider };
