$(function() {
	var carouselList = $('#carousel ul');


	function start() {
		setInterval(changeSlides, 3000);
		function changeSlides() {
			carouselList.animate( {'margin-left': -400}, 500, moveFirstSlide);
		};
		moveFirstSlide();
	};
	start();

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);
		carouselList.css({'margin-left': 0})
	};
});


