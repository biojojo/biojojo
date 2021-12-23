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

//IE6 Hover效果

$(".tabs1 tr").hover(

    function() { $(this).addClass("trbg");},

    function() { $(this).removeClass("trbg");});

 

});

$(document).ready(function (){
           //td間隔顏色
           $(function(){       
                     $('.SQT tr:nth-child(2n)').addClass('odd');
					 $('#promo-nav li:last-child ').addClass('last');
           });
});