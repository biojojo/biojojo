// ���Ҥ����ĪG
function switchTab(tab_title, pst, tab_cnt)
{
	for(var i=0 ; i<tab_cnt ; i++)
	{
		if (i == pst)
			document.getElementById(tab_title+'_tab_'+i).className = 'tab_on';
		else
			document.getElementById(tab_title+'_tab_'+i).className = '';
		if (i == pst)
			document.getElementById(tab_title+'_'+i).className = 'disyshow';
		else
			document.getElementById(tab_title+'_'+i).className = 'disyhidn';
	}
}

$(document).ready(function() {

//IE6 Hover�ĪG

$(".tabs1 tr").hover(

    function() { $(this).addClass("trbg");},

    function() { $(this).removeClass("trbg");});

 

});

