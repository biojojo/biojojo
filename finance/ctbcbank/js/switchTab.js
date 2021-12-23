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