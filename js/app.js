$(document).ready(function() {
	$('.navbar-nav li').on('click', function() {
		changeActiveSection($(this));
		slideContent($(this).attr('target'));	
	});
});

function changeActiveSection(activeElement) {
	$('.active-section').removeClass('active-section');
	activeElement.addClass('active-section');
	$('#header-menu').collapse('hide');
}

function slideContent(target) {
	var incomingElement = $('#' + target);
	var outgoingElement = $('.active-page');
	if (incomingElement.attr('index') > outgoingElement.attr('index')) {
		outgoingElement.hide('slide', {direction: 'left'}, 200, function() {
			outgoingElement.removeClass('active-page');
		});
		incomingElement.show('slide', {direction: 'right'}, 200, function() {
			incomingElement.addClass('active-page');
		});
	} else if (incomingElement.attr('index') < outgoingElement.attr('index')) {
		outgoingElement.hide('slide', {direction: 'right'}, 200, function() {
			outgoingElement.removeClass('active-page');
		});
		incomingElement.show('slide', {direction: 'left'}, 200, function() {
			incomingElement.addClass('active-page');
		});
	}
}