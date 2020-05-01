// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia( '(min-width: 768px)' );
// keep track of swiper instances to destroy later
let mySwiper;
const breakpointChecker = function() {
   // if larger viewport and multi-row layout needed
   if ( breakpoint.matches === true ) {
      // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      // or/and do nothing
      return;
   // else if a small viewport and single column layout needed
   } else if ( breakpoint.matches === false ) {
      // fire small viewport version of swiper
      return enableSwiper();
   }
};

const enableSwiper = function() {
   mySwiper = new Swiper ('.swiper-options', {
      loop: true,
      slidesPerView: 1.2,
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true
   });
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

var swiper = new Swiper('.swiper-container', {
  autoplay: true,
  loop: true,

  breakpoints: {
    320: {
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
