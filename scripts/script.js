var request;
var text;

function createRequest() {
	request = null;
	try {
		request = new XMLHttpRequest();
	} catch (trymicrosoft) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (othermicrosoft) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (failed) {
				request = null;
			}
		}
	}
	
	if (request == null) {
		alert('Nie udało się utworzyć obiektu żądania. Prowadzenie relacji LIVE będzie niemożliwe.');
	}
}

function readState() {
	if (request.readyState == 4) {	
		text = request.responseXML;
		
		if ($('.tooltip').is(':visible')) {
			$('.tooltip').fadeOut(
			function() {
				showText();
				$('.tooltip').fadeIn();
			});
		} else {
			showText();
			$('.tooltip').fadeIn();
		}
	}
}

function showText() {
	//var para = text.getElementsByTagName('para');
	//para = para[0];
	//$('.tooltip').text(para);
	var header = text.getElementsByTagName('header')[0];
	header = $(header).text();
	var para   = text.getElementsByTagName('paragraph')[0];
	para = $(para).text();
	
	$('.tooltip h3').text(header);
	$('.tooltip p').text(para);
}

function hideActives() {
	$('#skills_def a.active, #portfolio_def a.active, #contact_def a.active').removeClass('active');
}

function showTooltip(name) {
	if ($('.tooltip').is(':visible')) {
		$('.tooltip').fadeOut(
		function() {
			$('#'+name+'_window').fadeIn();
		});
	} else {
		$('#'+name+'_window').fadeIn();
	}
}

$(document).ready(
function() {
	$('dt').click(
	function() {
		hideActives();
		if ($('.tooltip').is(':visible')) {
			$('.tooltip').fadeOut();
		}
		
		$('dd:visible').slideUp(function() {
			$(this).prev().find('a').removeClass('active');
		});
		
		var name = '#' + $(this).attr('id') + '_def';
			
		if ($(name).is(':visible')) {
			$(name).slideUp(function() {
				$(name).prev().find('a').removeClass('active');
			});	
		} else {
			$(this).find('a').addClass('active');
			$(name).slideDown();
			
		}
	});
	
	$('#skills_def a').not('[href]').click(
	function() {
		hideActives();
		$(this).addClass('active');
		showTooltip('skills');
	});
	
	$('#portfolio_def a').not('[href]').click(
	function() {
		hideActives();
		$(this).addClass('active');
		showTooltip('portfolio');
	});
	
	$('#contact_def a').not('[href]').click(
	function() {
		hideActives();
		$(this).addClass('active');
		showTooltip('contact');
	});
});