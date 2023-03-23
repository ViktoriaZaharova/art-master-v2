$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.btn-search').on('click', function (e) {
	e.preventDefault();
	$('.search-wrapper .form-search').fadeToggle();
});

$(document).mouseup(function (e) { // событие  увода мыши
	var div = $(".search-wrapper .form-search"); // тут указываем ID элемента
	if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.fadeOut();
	}
});

$('.btn-services').on('click', function (e) {
	e.preventDefault();
	$('.services-dropdown').fadeToggle();
});


$(document).mouseup(function (e) { // событие клика по веб-документу
	var div = $(".services-dropdown"); // тут указываем ID элемента
	var btn = $('.btn-services');
	if (!div.is(e.target) && !btn.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.fadeOut(); // скрываем его
	}
});

$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	fade: true,
	swipe: false
});

$('.home-slider-nav').slick({
	slidesToShow: 4,
	infinite: false,
	arrows: false,
	focusOnSelect: true,
	asNavFor: '.home-slider',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 820,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
	]
});




var block_show = null;

function scrollTracking() {
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.advantages').offset().top;
	var eh = $('.advantages').outerHeight();

	if (et >= wt && et + eh <= wh + wt) {
		if (block_show == null || block_show == false) {
			$('body').addClass('no-scroll');
		}
		block_show = true;
	}
	else {
		if (block_show == null || block_show == true) {
			$('body').removeClass('no-scroll');
		}
		block_show = false;
	}
}

$(window).scroll(function () {
	scrollTracking();
});

$(document).ready(function () {
	scrollTracking();
});


$('.advantages-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	verticalSwiping: true,
	draggable: true,
	swipeToSlide: true,
	pauseOnHover: false
});

$(".advantages-slider").on("afterChange", function (event) {
	if ($(this).find('.slick-slide').last().hasClass('slick-current')) {
		$('body').removeClass('no-scroll');
	}
});

$('.reviews-slider').slick({
	slidesToShow: 1,
	arrows: false,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

//progressbar
function setProgress(index) {
	var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

	$progressBar
		.css('width', calc + '%')
		.attr('aria-valuenow', calc);
}

var $slider = $('.reviews-slider');
var $progressBar = $('.progress-bg');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setProgress(nextSlide);
});

setProgress(0);

// show list all
$('.btn-load').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.clients-wrapper').find('.clients-box:hidden').slice(0, 10).fadeIn();

	var onBlock = $(this).prev('.clients-wrapper').find('.clients-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

	// show list all