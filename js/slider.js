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

var swiper = new Swiper('.swiper-container-2', {
  autoplay: true,
  loop: true,

  breakpoints: {
    320: {
      pagination: {
        el: '.fraction-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
      },
    },
    
    768: {
      pagination: {
        el: '.fraction-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
      },
    },
  },
});
