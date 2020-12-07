$(document).ready(function() {


//прилипающие меню
var $menu = $("#menu");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 600 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 600 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu2").is(":hidden")) {
			$(".menu2").slideDown(600);
		} else {
			$(".menu2").slideUp(600);
		}
		
	});

	$(".menu2 a").click(function() {
		$(".menu2").slideUp(600);
		$(".sandwich").removeClass("active");
	});

	//слайдер

	$('.slider-portfolio').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow:1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true,
			}
		}]
	});

	$('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		asNavFor: '.slider-nav',
		slidesToScroll: 1,
		swipe: false,
	});


	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.slider-for',
		verticalSwiping: true,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				vertical: false,
				verticalSwiping: false,
				swipe: false,
			}
		}]
	});

	$('.slider-team').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow:4,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow:3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:2,
			}
		},
		{
			breakpoint: 768,
			settings: {
					slidesToShow:2,
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
					slidesToShow:1,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-sertificats').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 480,
			settings: {
					slidesToShow:1,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-review').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
					slidesToShow:1,
					adaptiveHeight: true,
				arrows: false,
				dots: true,
			}
		}
		]
	});


	// mask-input 
$(".input-phone").mask("+7 (999) 999-99-99");


	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
	});

	$('.tabs-card li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container-card").find(".tab-pane-card").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);

	});

	$('.tabs-inner li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-inner").fadeOut(0);
		var selectTab3 = $(this).attr("href");
		$(selectTab3).fadeIn(200);

	});

	$('.tabs-etap li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-etap").fadeOut(0);
		var selectTab4 = $(this).attr("href");
		$(selectTab4).fadeIn(200);

	});


$(".question__name").click(function(e) {
		e.preventDefault();
		$(".question").removeClass("active");
		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".question__answer").slideUp(200);

		}
	});

	{
		if ($(window).width() < 768) { 

			/*scroll to tabs*/

			$('.tabs-card a').on( 'click', function(){ 
				var el = $(this);
				var dest = el.attr('href'); 
				if(dest !== undefined && dest !== '') { 
					$('html').animate({ 
						scrollTop: $(dest).offset().top
        }, 500 // скорость прокрутки
        );
				}
				return false;
			});


			$('.tabs a').on( 'click', function(){ 
				var el2 = $(this);
				var dest2 = el2.attr('href'); 
				if(dest2 !== undefined && dest2 !== '') { 
					$('html').animate({ 
						scrollTop: $(dest2).offset().top
        }, 500 // скорость прокрутки
        );
				}
				return false;
			});

			$('.tabs-etap a').on( 'click', function(){ 
				var el3 = $(this);
				var dest3 = el3.attr('href'); 
				if(dest3 !== undefined && dest3 !== '') { 
					$('html').animate({ 
						scrollTop: $(dest3).offset().top
        }, 500 // скорость прокрутки
        );
				}
				return false;
			});
		}
	}

	(function($) {
		$.fn.hasverticalscrollbar = function() {
			return this.get(0) ? this.get(0).scrollheight > this.innerheight() : false;
		};

		$('.item-complectation__content').each(function()
		{ 
			if($(this).hasverticalscrollbar()){
				$(this).addClass("fdsfdsf");
			}
		});



	});

	$('.item-complectation__content').each(function()
	{ 
		if ($(this).find("ul").height() > $(this).height()) {
			$(this).addClass("active");
		}
	});







	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();

});
/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


