const checkBoxFilterItems = document.querySelectorAll('.form-check-input');
const cardsPriceRooms = document.querySelectorAll('.priceValue');
const cardsSquareRooms = document.querySelectorAll('.squareValue');



var mixer = mixitup('main', {
    selectors: {
		target: '.article',
		control: '[data-mixitup-control]'
    },
    animation: {
        duration: 300
    }
});

$(function(){
	$('input[class="form-check-input"]').click(function(){
	  let dataExt = $('#submit-btn').attr('data-filter');
		
		if (($(this).prop('checked'))  && ($('#submit-btn').attr('data-filter') === '')){
			$('#submit-btn').attr('data-filter', dataExt + '.'  + $(this).attr('value') );
			console.log($('#submit-btn').attr('data-filter'));
			
			
			
			
		} else if (($(this).prop('checked'))  && ($('#submit-btn').attr('data-filter') !== '')){
			$('#submit-btn').attr('data-filter',  dataExt + ',' + '.'  + $(this).attr('value') );
			console.log($('#submit-btn').attr('data-filter'));
		}
		
		else {
			let dataDel = dataExt.replace(','+'.' + $(this).attr('value'), '');
			$('#submit-btn').attr('data-filter', dataDel);
		}
	});

	$('#reset-btn').click(function(){
		$('input[class="form-check-input"]').prop('checked', false);
		$('#submit-btn').attr('data-filter', '');
	});
	});