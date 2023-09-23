const swiper = new Swiper('.swiper', {

  spaceBetween: 48,
  speed: 1500,
  slidesPerView: 6,
  loopedSlides: 8,
  loop: true,
  slidesOffsetBefore: 100,

  autoplay:{
    delay:2500,
    disableOnInteraction: false,
  },

  observer: true,
  observerParents: true,
});