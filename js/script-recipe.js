$(document).ready(function (){
	$('.js-menu').hide();
	$('.js-back').show();
	console.log('El documento esta listo');

	$('a.js-show-recipe').click(function(){
		$('div.page.recipe').removeClass('make');
	});

	$('a.js-show-make').click(function(){
		$('div.page.recipe').addClass('make');
	});

});