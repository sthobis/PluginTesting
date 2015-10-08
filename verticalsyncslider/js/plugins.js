// init Namespace
var MyNamespace = MyNamespace || {};

// module namespace
MyNamespace.UIInteraction = function( customSetting ) {

	// overwrite default settings
	var settings = $.extend( {

	}, 
	customSetting || {});

	this.init = function() {

		// init Main Slider component
		initMainSlider();
	}

	// method to initialize slick slider
	initMainSlider = function() {

		if ($('.hero-slider-container').length) {

			$('.hero-slider-background').each( function() {
				var imgsrc = "url('"+$(this).find('img').attr('src')+"')";
				console.log(imgsrc);
				$(this).css('background-image',imgsrc);
			});

			$('.hero-slider-backgrounds').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				vertical: true
			});

			$('.hero-slider-thumbnails').slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				asNavFor: '.hero-slider-backgrounds',
				dots: false,
				arrows: false,
				focusOnSelect: true,
				centerMode: false,
				vertical: true
			});
		}
	}
}