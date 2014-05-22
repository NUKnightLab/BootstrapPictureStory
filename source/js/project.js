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

// @codekit-prepend "source/jquery.fancybox.js"; 
// @codekit-prepend "source/jquery.fancybox-thumbs";


$(document).ready(function(){
	
	$('.subnav').waypoint('sticky', {
		offset: 61,
		wrapper: '<div class="sticky-wrapper" />',
		stuckClass: 'navbar-fixed-top'
	});
	
	$(".enlarge").fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',

		helpers: {
			title: {
				type: 'inside'
			},
			thumbs: {
				width	: 50,
				height	: 50
			}
		}
	});

	
});