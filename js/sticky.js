$(document).ready(function()
	{
	var NavY = $('.nav').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.nav').addClass('sticky');
		$('.navninja').addClass('navninjaactive'); 
	} else {
		$('.nav').removeClass('sticky');
		$('.navninja').removeClass('navninjaactive');
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});