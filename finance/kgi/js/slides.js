$(function() {
    $('.slideshowa').cycle({
			fx:     'scrollHorz', 
			speed:  'slow', 
			timeout: 8000, 
			pager:  '#slides',
			slideExpr: 'img'
    });
    
    $('.slideshowb').cycle({
			fx:     'scrollHorz',
			speed:  'slow', 
			timeout: 8000,
			pager:  '#slidesb',
			slideExpr: 'img'
    });
});