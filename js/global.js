	$(document).ready(function() {
		inputs = $("input");
	    inputs.keydown(function (e) {
	        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	            (e.keyCode == 65 && e.ctrlKey === true) || 
	            (e.keyCode >= 35 && e.keyCode <= 39)) {
	                 return;
	        }
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
	    });
		
	    inputs.each(function() {
	    	index = $(this).index('form input');
	    	prefix = 'param';
	    	minValue = 1;
	    	$(this).attr('min', minValue).attr('id', prefix+index).prev().attr('for', prefix+index);
	    });
	});