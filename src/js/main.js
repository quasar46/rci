$(document).ready(function () {
	$('.main-slider').slick({
		dots: true,
	});

	$('.main-slider--mobile').slick({
	});

	$('.services__slider').slick({
		responsive: [
			{
				breakpoint: 5000,
				settings: "unslick"
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				},
				breakpoint: 600,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

	$('.news__slider').slick({
		responsive: [
			{
				breakpoint: 5000,
				settings: "unslick"
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				},
				breakpoint: 600,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

	$('.slider-partners').slick({
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.slider-thanks').slick({
		slidesToShow: 4,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});
});

// accordion
var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

// main menu
$(document).ready(function () {
	// $('.header__burger').click(function () {
	// 	$('.menu-mobile').addClass('active');
	// })
	// $('.closed').click(function () {
	// 	$('.menu-mobile').removeClass('active');
	// })
	$('.header__burger').click(function () {
		$('.menu-mobile').slideDown();
	})
	$('.closed').click(function () {
		$('.menu-mobile').slideUp();
	})
})