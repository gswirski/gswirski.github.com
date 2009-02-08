// JavaScript Document



$(document).ready( function() {						
	$('#left em.s3, #left em.s2, #left em.s1').click( function() {
		if ($('#t1').css('left') == '0px' && $('#t2').css('left') == '0px') {
			$('#t1').animate( { 
				left: "-170px" 
			}, 500);
		} else if ($('#t2').css('left') == "0px") {
			$('#t1').animate( {
				left: "0px"
			}, 500, "linear", function() 
				{ 
					$('#t2').animate( { 
						left: "-170px" 
					}, 500) 
				} 
			);
		} else {
			$('#t2').animate( {
				left: "0px"
			}, 500, "linear", function() 
				{ 
					$('#t1').animate( { 
						left: "-170px" 
					}, 500) 
				} 
			);			
		}
	} );				  

	$('#lang_all').click( function() {
		$('.temp_en').addClass('en').removeClass('temp_en');
		$('.temp_pl').addClass('pl').removeClass('temp_pl');
		$('.temp_editing').addClass('editing').removeClass('temp_editing');
		$('.en, .pl, .edit, .ok, .editing').css('display', 'block');
	} );

	$('#lang_en').click( function() {
		$('.temp_pl').addClass('pl').removeClass('temp_pl');
		$('.temp_editing').addClass('editing').removeClass('temp_editing');
		$('.en').addClass('temp_en').removeClass('en').css('display', 'inline');
		$('.pl, .edit, .ok, .editing').css('display', 'none');
	} );
	
	$('#lang_pl').click( function() {
		$('.temp_en').addClass('en').removeClass('temp_en');
		$('.pl').addClass('temp_pl').removeClass('pl').css('display', 'inline');
		$('.editing').addClass('temp_editing').removeClass('editing').css('display', 'inline');
		$('.en, .edit, .ok').css('display', 'none');
	} );
	
	$('.edit').click().toggle( 
		function() {
			$(this).addClass('ok').removeClass('edit');
			$(this).next().addClass('editing').removeClass('pl');
			$(this).next().find('span').replaceWith('<input type="text" name="kicha" value="'+$(this).next().text()+'" />');
			
		}, 
		function() {
			$(this).next().addClass('pl').removeClass('editing');
			$(this).next().find('input').replaceWith('<span>'+$(this).next().find('input').attr('value')+'</span>');
			$(this).addClass('edit').removeClass('ok');
		} 
	);

	$('.hide').click( function() {
		$(this).parent().parent().animate( {
			left: "0px"
		}, 500); 						   
	} );
	
	$('.ss1').click( function() {				  
		$(this).parent().parent().find('em:first').removeClass().addClass('s1');
	} );
	
	$('.ss2').click( function() {
		$(this).parent().parent().find('em:first').removeClass().addClass('s2');
	} );
	
	$('.ss3').click( function() {
		$(this).parent().parent().find('em:first').removeClass().addClass('s3');
	} );
} );