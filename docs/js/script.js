$(document).ready(function() {

/// Menu Top Links Anchor Scroll ///
	$('.menu_top a').click(function(e) {

		e.preventDefault();

		var menuLink = $(this).attr('href');
		var sectionDist = $(menuLink).offset().top;

		$('body,html').animate({scrollTop: sectionDist}, 1200);
	});


/// Section-2 Professions Switcher ///
	$('.menu_vacancies a').click(function(e) {

		e.preventDefault();

		// Section Background Switching //
		var prof_class = $(this).attr('class');

		$('#section-2').removeClass();
		$('#section-2').addClass(prof_class);

		// Menu Links Switching //
		$('.menu_vacancies a.selected').removeClass('selected');
		$(this).addClass('selected');

		// Professions Block Switching //
		var prof = $(this).attr('href');

		$('.vacancy').not(prof).css({'display':'none'});
		$(prof).fadeIn();
	});


/// Forms sender ///
	$('.form').submit(function(e) {

		e.preventDefault();

		var formData = $(this).serialize();

		$.post('/send_form.php', formData, function(result) {

			switch(result) {
				case '1':
					popUpShow();
					$('#form_popup').addClass('submitted');
					$('.succeeded').addClass('submitted');
					break;

				case '0':
				default:
					popUpShow();
					$('#form_popup').addClass('submitted');
					$('.failed').addClass('submitted');
					break;
			}
		});
	});


/// Popup Closing Functions ///

	// Popup Hide // Button Closing // Alternate Way //
	/*$('.popup_close_button').click(function(e) {

		e.preventDefault();

		$('#popup').fadeOut();
	});*/

	// Popup Hide // Non Target Closing //
	$(document).mouseup(function(e) {

		var popUp = $('.popup_block');

		if (!popUp.is(e.target) && popUp.has(e.target).length === 0) {
			$('#popup').fadeOut();
			$('body').css({'overflow':'visible'});
		}
	});

}); /// Ready END ///


/// Popup Visibility Functions ///

	// Popup Show Function //
	function popUpShow() {
		$('#popup').fadeIn();
		// $('body').css({'overflow':'hidden'});
	}

	// Popup Hide Function //
	function popUpHide() {
		$('#popup').fadeOut();
		// $('body').css({'overflow':'visible'});
	}
