$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(".intro-slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
	autoplay: true,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>'
});
