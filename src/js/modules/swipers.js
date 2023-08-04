import Swiper from 'swiper';
// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

export function SlidersInit(){
    const width = window.innerWidth;
    if (document.querySelector('.swiper')){
        if(width < 769 ){
            const mobileSlider = new Swiper('#brands-swiper', {
                modules: [Navigation, Pagination],
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                },
                mousewheel: {
                },
                slidesPerView: 1.3,
                spaceBetween : 16,
            });
            const mobileSlider2 = new Swiper('#types-swiper', {
                modules: [Navigation, Pagination],
                pagination: {
                    el: '#types-pagination',
                    clickable:true,
                },
                mousewheel: {
                },
                slidesPerView: 1.3,
                spaceBetween : 16,
            });
            const mobileSlider3 = new Swiper('#prices-swiper', {
                modules: [Navigation, Pagination],
                pagination: {
                    el: '#prices-pagination',
                    clickable:true,
                },
                mousewheel: {
                },
                slidesPerView: 1.23,
                spaceBetween : 16,
            });
        }
    }
}
SlidersInit();
