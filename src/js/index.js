import {$} from './common';

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



// Перевод

function Translate() { 
	//initialization
	this.init =  function(attribute, lng) {
	  this.attribute = attribute;
	  this.lng = lng;
	};
	//translate 
	this.process = function() {
	  var _self = this;
	  var xrhFile = new XMLHttpRequest();
	  //load content data 
	  xrhFile.open("GET", "./assets/json/"+this.lng+".json", false);
	  xrhFile.onreadystatechange = function () {
		if(xrhFile.readyState === 4) {
		  if(xrhFile.status === 200 || xrhFile.status == 0) {
			var LngObject = JSON.parse(xrhFile.responseText);
			console.log(LngObject["name1"]);
			var allDom = document.getElementsByTagName("*");
			for(var i =0; i < allDom.length; i++){
			  var elem = allDom[i];
			  var key = elem.getAttribute(_self.attribute);
			  if(key != null) {
				console.log(key);
				elem.innerHTML = LngObject[key];
			  }
			}
		  }
		}
	  };
	  xrhFile.send();
	};
  }
  
  // Change language
  function loadNewLang(new_lang) {
	var translate = new Translate();
	var currentLng = new_lang;
	var attributeName = 'data-lang';
	translate.init(attributeName, currentLng);
	translate.process();
  }

loadNewLang('ru');

// выбор языка
$('.js-lang-main').on('click', function() {
	$(this).parent('.js-lang').toggleClass('open');
	$(this).siblings('.js-lang-popup').slideToggle(300);
});

$('.js-lang-item').on('click', function() {
	var curImg = $(this).find('.js-lang-img').attr('src');
	var curText = $(this).find('.js-lang-text').text();
	var lang = $(this).data('language');

	$('.js-lang-main').find('.js-lang-img').attr('src', curImg);
	$('.js-lang-main').find('.js-lang-text').text(curText);

	loadNewLang(lang);

	$('.js-lang-item').removeClass('active');
	$(this).addClass('active');
	$(this).parents('.js-lang').removeClass('open');
	$(this).parent('.js-lang-popup').slideUp(300);
});