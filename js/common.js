$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-search').on('click', function (e) {
	e.preventDefault();
	$('.search-wrapper .form-search').fadeToggle();
});

$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	fade: true,
	swipe: false
});

$('.home-slider-nav').slick({
	slidesToShow: 4,
	// variableWidth: true,
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
});