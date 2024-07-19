import Swiper from 'swiper/bundle';

const onReady = () : void =>
{
    const swiper = new Swiper('.coverflow', {
        effect: "coverflow",
        grabCursor: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);