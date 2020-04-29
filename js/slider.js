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
  autoplay: false,
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

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 2,
  freeMode: false,
  autoplay: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 0,
  autoplay: false,
  pagination: {
    el: '.fraction-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.slide-next-0',
    prevEl: '.slide-prev-0',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
