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

$(document).ready(function () {
	$(".js-tab-trigger").hover(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		// $('.js-tab-trigger.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		// $('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
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
	asNavFor: '.home-slider'
});

$('.advantages-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	dots: true,
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
// const $progressBarLabel = $('.timeline__val');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setProgress(nextSlide);
	// $progressBarLabel.text(currentSlide + 1);
});

// $slider.on('afterChange', function (event, slick, currentSlide) {
// 	$progressBarLabel.text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
// });
setProgress(0);

// show list all
$('.btn-load').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.clients-wrapper').find('.clients-box:hidden').slice(0, 10).slideDown();

	var onBlock = $(this).prev('.clients-wrapper').find('.clients-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

	// show list all