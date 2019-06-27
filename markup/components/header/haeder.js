$('.header__navburger').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('header__navburger-active');
	$('.rightmenu').slideToggle();
});