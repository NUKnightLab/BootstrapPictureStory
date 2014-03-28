/**
	Bootstrap Project Template
	Designed and built by Zach Wise at VéritéCo
*/  

/*	Required Files
	CodeKit Import
	http://incident57.com/codekit/
================================================== */

// @codekit-prepend "source/jquery.smooth-scroll.js";

// @codekit-prepend "source/bootstrap/transition.js";
// @codekit-prepend "source/bootstrap/scrollspy.js";
// @codekit-prepend "source/bootstrap/tab.js";
// @codekit-prepend "source/bootstrap/tooltip.js";
// @codekit-prepend "source/bootstrap/carousel.js";
// @codekit-prepend "source/bootstrap/collapse.js";
// @codekit-prepend "source/bootstrap/modal.js";
// @codekit-prepend "source/bootstrap/dropdown.js";
// @codekit-prepend "source/bootstrap/affix.js";

// @codekit-prepend "source/waypoints.js";
// @codekit-prepend "source/waypoints-sticky.js";

/*
(function ($) {
	
	$(function(){

		// fix sub nav on scroll
		var $win = $(window),
				$body = $('body'),
				$nav = $('.subnav'),
				navHeight = $('.navbar').first().height(),
				subnavHeight = $('.subnav').first().height(),
				subnavTop = $('.subnav').length && $('.subnav').offset().top - navHeight,
				marginTop = parseInt($body.css('margin-top'), 10);
				isFixed = 0;

		processScroll();

		$win.on('scroll', processScroll);

		function processScroll() {
			var i, scrollTop = $win.scrollTop();

			if (scrollTop >= subnavTop && !isFixed) {
				isFixed = 1;
				$nav.addClass('navbar-fixed-top');
				$body.css('margin-top', marginTop + subnavHeight + 'px');
			} else if (scrollTop <= subnavTop && isFixed) {
				isFixed = 0;
				$nav.removeClass('navbar-fixed-top');
				$body.css('margin-top', marginTop + 'px');
			}
		}

	});

})(window.jQuery);
*/

$(document).ready(function(){
	
	$('.subnav').waypoint('sticky', {
		offset: 61,
		wrapper: '<div class="sticky-wrapper" />',
		stuckClass: 'navbar-fixed-top'
	});
	
});