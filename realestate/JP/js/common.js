// JavaScript Document
// 頁籤切換效果
function switchTab(tab_title, pst, tab_cnt)
{
	for(var i=0 ; i<tab_cnt ; i++)
	{
		if (i == pst)
			document.getElementById(tab_title+'_tab_'+i).className = 'current';
		else
			document.getElementById(tab_title+'_tab_'+i).className = '';
		if (i == pst)
			document.getElementById(tab_title+'_'+i).className = 'disyshow';
		else
			document.getElementById(tab_title+'_'+i).className = 'disyhidn';
	}
}


$(document).ready(function() {
    //動態頁籤	
    //$("ul.tabs").tabs("div.major", {event:'mouseover',tabs:'li'});

    //td與li間隔顏色
    $('.interval_add_color tr:nth-child(2n)').addClass('odd');
    $('.interval_add_color li:nth-child(2n)').addClass('odd');
    $('[class^="table"] tr:nth-child(2n)').addClass('odd');

    //IE6 Hover效果
    $("#navigate .navi li,.characterNavi li").hover(
    function() { $(this).addClass("iehover"); },
	  function() { $(this).removeClass("iehover"); });
});

//scrollTop
$(document).ready(function() {
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },500);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

//stickyBx
$(function() {

	// grab the initial top offset of the navigation 
	var stickyBx_offset_top = $('#stickyBx').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var stickyBx = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > stickyBx_offset_top) { 
			$('#wrapper').addClass("stickyOn");
			
		} else {
			$('#wrapper').removeClass("stickyOn");
		}   
	};
	
	// run our function on load
	stickyBx();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 stickyBx();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').click(function(event){ 
		event.preventDefault(); 
	});
	
});

//colorbox
$(document).ready(function(){
	//Examples of how to assign the Colorbox event to elements
	$(".group1").colorbox({rel:'group1'});
	$(".group2").colorbox({rel:'', transition:"fade"});
	$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
	$(".group4").colorbox({rel:'group4', slideshow:true});
	$(".ajax").colorbox();
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
	$(".inline").colorbox({inline:true});
	$(".callbacks").colorbox({
		onOpen:function(){ alert('onOpen: colorbox is about to open'); },
		onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
		onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
		onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
		onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
	});

	$('.non-retina').colorbox({rel:'group5', transition:'none'})
	$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
	
	//Example of preserving a JavaScript event for inline calls.
	$("#click").click(function(){ 
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
		return false;
	});
});