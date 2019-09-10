$(".intro-slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
	autoplay: true,
	fade: true,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>'
});

$(".card-slider__wrapper").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
	autoplay: true,
  prevArrow: '<div class="prev-1"></div>',
  nextArrow: '<div class="next-1"></div>'
});
