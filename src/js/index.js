import {$} from './common';

// выбор языка
$('.js-lang-main').on('click', function() {
	$(this).parent('.js-lang').toggleClass('open');
	$(this).siblings('.js-lang-popup').slideToggle(300);
});

$('.js-lang-item').on('click', function() {
	var curImg = $(this).find('.js-lang-img').attr('src');
	var curText = $(this).find('.js-lang-text').text();

	$('.js-lang-main').find('.js-lang-img').attr('src', curImg);
	$('.js-lang-main').find('.js-lang-text').text(curText);

	$(this).parents('.js-lang').removeClass('open');
	$(this).parent('.js-lang-popup').slideUp(300);
});

// Слайдер танков
$('.js-slider-tanks').slick({
	nextArrow:'<div class="slick-next slick-arrow"><svg class="icon ic-arrow-right" width="26" height="40"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></div>',
	prevArrow:'<div class="slick-prev slick-arrow"><svg class="icon ic-arrow-left" width="26" height="40"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></div>'
});

// Переключение услуг
$('.js-services-list-decs-item:first-child').fadeIn();

$('.js-services-list-item').on('click', function(){
	var index = $(this).data('index');

	$('.js-services-list-item').removeClass('active');
	$(this).addClass('active');

	$('.js-services-list-decs-item').css('display', 'none');
	$('.js-services-list-decs-item[data-index="'+index+'"]').fadeIn(1000);
});