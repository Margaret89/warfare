import {$} from './common';

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