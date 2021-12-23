// JavaScript Document
$(document).ready(function(){ 
	$("dd").hide(); 
	$("dt").click(function(){ 
		$(this).next().slideToggle("slow");

	}); 
});

