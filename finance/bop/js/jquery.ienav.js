jQuery(document).ready(function(){
  jQuery("#navmenu-h li").hover(
    function() { jQuery(this).addClass("iehover"); },
    function() { jQuery(this).removeClass("iehover"); }
  );
});