const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 12000, // gira cada 12 segundos
    disableOnInteraction: false,
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
  },
});
