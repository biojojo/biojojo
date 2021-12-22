// JavaScript Document
$(function(){
	//下拉選單
	$('#option_company1').fancyfields({
    	onSelectChange: function (input,text,val){
			window.location = val;
    	}
	});
	$('#option_company2').fancyfields({
    	onSelectChange: function (input,text,val){
			window.location = val;
    	}
	});
	$('#option_company3').fancyfields({
    	onSelectChange: function (input,text,val){
			window.location = val;
    	}
	});

})