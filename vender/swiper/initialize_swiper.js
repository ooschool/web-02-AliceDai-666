const swiper = new Swiper('.swiper', {

  spaceBetween: 48,
  speed: 1500,
  slidesPerView: 6,
  loop: true,
  createElements: true,
  slidesOffsetBefore: 130,

  autoplay: {
    delay:2500,
    disableOnInteraction: false,
  },

  observer: true,
  observerParents: true,
});