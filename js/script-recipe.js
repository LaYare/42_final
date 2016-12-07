$(document).ready(function (){
	$('.js-menu').hide();
	$('.js-back').show();
	$('.js-back').click(function(){
		window.location = 'index.html';
	});
	console.log('El documento esta listo');

	$('a.js-show-recipe').click(function(){
		$('div.page.recipe').removeClass('make');
		$('a.js-show-recipe').addClass('active');
		$('a.js-show-make').removeClass('active');
	});

	$('a.js-show-make').click(function(){
		$('div.page.recipe').addClass('make');
		$('a.js-show-make ').addClass('active');
		$('a.js-show-recipe').removeClass('active');
	});

});