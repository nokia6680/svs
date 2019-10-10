var swiper = new Swiper('.swiper-container', {
  autoplay: true,
  loop: true,

  breakpoints: {
    768: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    },
  },
});
