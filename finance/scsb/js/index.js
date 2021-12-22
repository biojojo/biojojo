// JavaScript Document
$(function(){
	//login
	//$("#btn_index_login a").colorbox({iframe:true, width:"542px", height:"294px;"});
	
	
	//index_banner
	var _show = 0;
	var _items = $(".index_banner").length-1;
	
	$("#index_arrow_next").click(function(){
		if (_show < _items) {
			_show ++;
		}else {
			_show = 0 ;
		}
		goStage();
	});
	$("#index_arrow_prev").click(function(){
		if (0 < _show) {
			_show --;
		}else {
			_show = _items;
		}
		goStage();
	});
	
	var moveBanner = setInterval(function(){
		if (_show < _items) {
			_show ++;
		}else {
			_show = 0;
		}
		goStage();
		
	}, 6000);
	
	function goStage(){
		var _distance = -945*_show;
		$("#index_show_group").stop().animate({left: _distance}, 500);
	};
	
	//index_news
	$("#index_news_content1").show();
	$("#index_news_tag1").addClass("index_news_tag_choosen");
	
	$("#index_news_tag1 a").click(function() {
		$(".index_news_content").hide();
		$("#index_news_content1").stop().slideDown(300);
		$(".index_news_tag").removeClass("index_news_tag_choosen");
		$("#index_news_tag1").addClass("index_news_tag_choosen");
    });
	$("#index_news_tag2 a").click(function() {
		$(".index_news_content").hide();
		$("#index_news_content2").stop().slideDown(300);
		$(".index_news_tag").removeClass("index_news_tag_choosen");
		$("#index_news_tag2").addClass("index_news_tag_choosen");
    });
	$("#index_news_tag3 a").click(function() {
		$(".index_news_content").hide();
		$("#index_news_content3").stop().slideDown(300);
		$(".index_news_tag").removeClass("index_news_tag_choosen");
		$("#index_news_tag3").addClass("index_news_tag_choosen");
    });
	
	//商品動態報導跳出視窗
	//$("#index_news_content2 .index_news_list a").colorbox({inline:true, width:"500px"});
})