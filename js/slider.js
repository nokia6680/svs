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
  arrows: true,
  dots: false,
	autoplay: true,
  prevArrow: '<div class="prev-1"></div>',
  nextArrow: '<div class="next-1"></div>',
  slideCount: '<span class="card-slider__counter-overall"></span>',
  slickCurrentSlide: '<span class="card-slider__counter-current"></span>'
});

// Элемент, куда вы хотите записать страницы
let pages = $('.card-slider__counter');
// Элемент слайдера
let slider = $('.card-slider__wrapper');

slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

   let i = (currentSlide ? currentSlide : 0) + 1;
    pages.text(i + '/' + slick.slideCount);
});
