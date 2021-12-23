// JavaScript Document
$(document).ready(function (){
    if(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())){
        $("div[class*='ad_1']").css("display", "none");
        $("div[class*='ad_2']").css("display", "block");
		$("bg").css("background", "none");
    }
}); 