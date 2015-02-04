//this is my code learing javascript
//when looking for jquery function names, use api.jquery.com
//hide trap sign
//When user clicks on image, reveal trap sign

$(document).ready(function() {
	
	$('.warning').hide();
	//another way to do it, though chaining is not recommended
	//$('.warning').hide().show();

	//capture click on image
	/*
	$('.image').on('click', function() {
		console.log('Sweet: We clicked the image!');
		$('.warning').show('slow');
	});
	another way to do it
	$('image').click(function () {
		$('.warning').show('slow');
	})
	*/
	$('.image').on('click', function() {
		$('.warning').toggle('slow');
	});
})