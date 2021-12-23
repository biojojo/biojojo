$(document).ready(function(){
  $("#navmenu-h li").hover(
    function() { $(this).addClass("iehover"); },
    function() { $(this).removeClass("iehover"); }
  );
});
