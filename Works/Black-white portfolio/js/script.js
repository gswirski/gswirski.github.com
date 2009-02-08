$(document).ready( function() {
	$('#container').wrap('<div id="wrapper"></div>');
	/*
	$('#menu').wrap('<div id="menu-wrapper"></div>')
	$('#menu').before('<div class="top-left"></div>');
	$('#menu').before('<div class="top-margin"></div>');
	$('#menu').before('<div class="top-right"></div>');
	$('#menu').after('<div class="bottom-right"></div>');
	$('#menu').after('<div class="bottom-margin"></div>');
	$('#menu').after('<div class="bottom-left"></div>');
	
	$('#content').wrap('<div id="content-wrapper"></div>')
	$('#content').before('<div class="top-left"></div>');
	$('#content').before('<div class="top-margin"></div>');
	$('#content').before('<div class="top-right"></div>');
	$('#content').after('<div class="bottom-right"></div>');
	$('#content').after('<div class="bottom-margin"></div>');
	$('#content').after('<div class="bottom-left"></div>');

	$('#works li:first').before('<li class="before-works"></li>');
	$('#works li:last').after('<li class="after-works"></li>');
	*/
	
	$('#content').wrap('<div id="content-wrapper"></div>');
	
	$('#content').wrap('<div class="content top-left"></div>');
	$('#content').wrap('<div class="content top-right"></div>');
	$('#content').wrap('<div class="content bottom-left"></div>');
	$('#content').wrap('<div class="content bottom-right"></div>');
	
	var fullSize = 1;
	
	$('#menu .active').click( function() {
		if (fullSize == 1) {
			$('#content *').css("display", "none");
			changeSize(100, 50);
			fullSize = 0;
		} else {
			changeSize(300, 150);
			fullSize = 1;
		}		
	});
});

function changeSize(width, height) {
	$('#content-wrapper, .content').animate({
		height: height,
		width: width
	});
	
	$('#content').animate({
		width: width - 30,
		height: height
	});
}

function changeSize2(width, height) {
	var top = 118;
	var left = 292;
	var MaxWidth = 336;
	var MaxHeight = 242;
	
	var newTop = ((MaxHeight - height) / 2) + top;
	var newLeft = ((MaxWidth - width) / 2) + left;	
	
	$('#content-wrapper .top-left').animate({
		top: newTop,
		left: newLeft
	});
	
	$('#content-wrapper .top-margin').animate({
		top: newTop,
		left: newLeft + 15,
		width: width - 30
	});
	
	$('#content-wrapper .top-right').animate({
		top: newTop,
		left: newLeft + width - 15
	});
	
	$('#content').animate({
		width: width,
		height: height - 30,
		left: newLeft,
		top: newTop + 15
	});
	
	$('#content-wrapper .bottom-left').animate({
		left: newLeft,
		top: newTop + height - 15
	});
	
	$('#content-wrapper .bottom-margin').animate({
		left: newLeft + 15,
		top: newTop + height - 15,
		width: width - 30
	});
	
	$('#content-wrapper .bottom-right').animate({
		left: newLeft + width - 15,
		top: newTop + height - 15
	});
}