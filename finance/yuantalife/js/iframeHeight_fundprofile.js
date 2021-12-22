// JavaScript Document

	var MyInterval_fund;
function autoIframe()	{
	if(location.href.indexOf("#") != -1 ){
		var mySplitResult = location.href.split("#");
		var iFRAMEheight =mySplitResult[1] ;
		if(document.getElementById("fundp")){
				document.getElementById("fundp").height=iFRAMEheight ;}
	}
		 if(MyInterval_fund) {
		 clearTimeout(MyInterval_fund);
		 } 
	 MyInterval_fund=setTimeout("autoIframe()",1000);
}
autoIframe();	