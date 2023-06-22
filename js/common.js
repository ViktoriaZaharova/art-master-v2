$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
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
	swipe: false,
	responsive: [
		
		{
			breakpoint: 576,
			settings: {
				swipe: true,
				asNavFor: '.home-slider-nav',
				autoplay: true,
				autoplaySpeed: 4000,
				fade: false,
			}
		}
	]
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
				autoplaySpeed: 4000,
			}
		}
	]
});

$('.type-products').slick({
	slidesToShow: 7,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1550,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
	]
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

$(function () {
	var handle = $(".custom-handle1 span");
	$(".slider1").slider({
		min: 0,
		max: 200,
		value: 100,
		animate: "slow",
		range: "min",    
		create: function () {
			handle.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle.text(ui.value);
			$(".slider-input1").val(ui.value);
		}
	});

	$(".slider-input1").val($(".slider1").slider("values", 0));

	var handle2 = $(".custom-handle2 span");
	$(".slider2").slider({
		min: 1,
		max: 10,
		value: 2,
		animate: "slow",
		range: "min",
		create: function () {
			handle2.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle2.text(ui.value);
			$(".slider-input2").val(ui.value);
		}
	});

	$(".slider-input2").val($(".slider2").slider("values", 0));

	var handle3 = $(".custom-handle3 span");
	$(".slider3").slider({
		min: 0,
		max: 2,
		value: 1,
		animate: "slow",
		range: "min",
		create: function () {
			handle3.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle3.text(ui.value);
			$(".slider-input3").val(ui.value);
		}
	});

	$(".slider-input3").val($(".slider3").slider("values", 0));
});




// var block_show = null;

// function scrollTracking() {
// 	var wt = $(window).scrollTop();
// 	var wh = $(window).height();
// 	var et = $('.advantages').offset().top;
// 	var eh = $('.advantages').outerHeight();

// 	if (et >= wt && et + eh <= wh + wt) {
// 		if (block_show == null || block_show == false) {
// 			$('body').addClass('no-scroll');
// 		}
// 		block_show = true;
// 	}
// 	else {
// 		if (block_show == null || block_show == true) {
// 			$('body').removeClass('no-scroll');
// 		}
// 		block_show = false;
// 	}
// }

// $(window).scroll(function () {
// 	scrollTracking();
// });

// $(document).ready(function () {
// 	scrollTracking();
// });


// $('.advantages-slider').slick({
// 	slidesToShow: 1,
// 	fade: true,
// 	arrows: false,
// 	dots: true,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
// 	verticalSwiping: true,
// 	draggable: true,
// 	swipeToSlide: true,
// 	pauseOnHover: false
// });

// $(".advantages-slider").on("afterChange", function (event) {
// 	if ($(this).find('.slick-slide').last().hasClass('slick-current')) {
// 		$('body').removeClass('no-scroll');
// 	}
// });

$('.reviews-slider').slick({
	slidesToShow: 1,
	arrows: false,
	variableWidth: true,
	// autoplay: true,
	// autoplaySpeed: 2000,
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

$('.btn-load').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.page-popular-services').find('.service-col:hidden').slice(0, 10).fadeIn();

	var onBlock = $(this).parents('.page-popular-services').find('.service-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-load').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.page-blog').find('.blog-col:hidden').slice(0, 3).fadeIn();

	var onBlock = $(this).parents('.page-blog').find('.blog-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-load-reviews').click(function (e) {
	e.preventDefault();
	$('.grid-wrapper').addClass('open');
	$(this).hide();
});
// show list all

// show list all
$('.btn-load-text').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents().find('.box-text-toggle');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('.btn-text').text('скрыть');

		content.addClass('open');
	} else {
		$this.removeClass('trigger');
		$this.find('.btn-text').text('показать  больше');

		content.removeClass('open');
	}
});
// show list all
