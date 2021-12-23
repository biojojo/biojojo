// JavaScript Document
$(function(){
	var timer;
	var i = -1;
	var speed = 5000;//停留秒數
	//var myItembox = $("#ItemBox ul li a");
	var myItembox = $("#ItemBox ul li a");
	

	$("#showinfo").html($("#ItemBox ul li a").attr("rel"));//文字摘要
	
	myItembox.click(function(){		
		var imgfile=$(this).attr("data");//圖片位置
		var imgurl=$(this).attr("href");//廣告連結
		var imgtarget=$(this).attr("target");//另開新視窗設定
		
		$("#showimg").attr("src",imgfile);
		$("#showurl").attr("href",imgurl);
		$("#showurl").attr("target",imgtarget);
		
		i = myItembox.index($(this));
		
		$("#ItemBox ul li").removeClass("on");//remove		
		$(this).parent().addClass("on");//add		
		
		return false;	
	}).hover(function(){//滑入時停止輪播
		clearTimeout(timer);
	}, function(){
		timer = setTimeout(autoShow, speed);
	});

	//滑入時停止輪播
	$("#ShowBox").hover(function(){
		clearTimeout(timer);
	}, function(){
		timer = setTimeout(autoShow, speed);
	});
	
	//自動輪播函數
	function autoShow(){
		if(i+1<myItembox.length){
			i++;
		}else{
			i=0;
		}
		myItembox.eq(i).click();
		myItembox.removeClass("on");
		myItembox.eq(i).parent().addClass("on");
		timer = setTimeout(autoShow, speed);
	}
	//啟動自動輪播
	autoShow();
});
