
import Swiper, { Navigation, Pagination } from 'swiper'
const slider = () => {
  
  new Swiper('.product__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  
};

export default slider;


