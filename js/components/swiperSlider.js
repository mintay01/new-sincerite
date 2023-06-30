import Swiper from "swiper/bundle";
function swiperSlider() {
    if (window.innerWidth > 768) {
        const popular = new Swiper(".popular__swiper", {
            // Default parameters
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            // centeredSlides: true,
            autoplay: {
                delay: 3000,
            },
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

    var swiper = new Swiper(".mySwiper", {
        speed: 1000,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 1000,
        },
    });
    swiper;
}
export { swiperSlider };
