$(window).on('swipeleft', function() {
	console.log('swiped');
	openMenu($(".slide-menu"));
});
$(window).on('swiperight', function() {
	closeMenu($(".slide-menu"));
});