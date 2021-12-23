// 文字大小變化
function setCookie(name,value,expires) { 
document.cookie=name + "=" + escape(value) + ((expires == null)? "" : (" ; expires=" + expires.toGMTString())) + "; path=/";
}
function getCookie(name) { var arg = name + "="; var alen = arg.length; var clen = document.cookie.length; var i = 0; while(i< clen) { var j = i + alen; if(document.cookie.substring(i,j)==arg){ var end = document.cookie.indexOf(";",j); if(end == -1) end = document.cookie.length; return unescape(document.cookie.substring(j,end)); } i=document.cookie.indexOf(" ",i)+1; if (i==0) break; } return null; }
function getFontCookie() { 
    var cookie = getCookie("stocknews_font_size"); 
    if ( cookie == null ) return 16; 
    if ( cookie.length ) return cookie; 
    else return 16; 
}
var fontSize = parseInt(getFontCookie());
function scaleFont(val) {
    var aricle, lineHeight; 
    aricle = document.getElementById("aricle"); 
    if (val > 0) { 
        if (fontSize <= 18) { 
            fontSize = fontSize + val; lineHeight = fontSize+Math.round(1.1*fontSize); 
            aricle.style.fontSize = fontSize + "px"; 
        }
   } else { 
        if (fontSize > 12) { 
            fontSize = fontSize + val; lineHeight = fontSize+Math.round(1.1*fontSize); 
            aricle.style.fontSize = fontSize + "px";
        } else {
            lineHeight = fontSize+Math.round(1.1*fontSize);
            aricle.style.fontSize = fontSize + "px";
        }
    } 
    var mydate = new Date; 
    mydate.setDate(mydate.getDate()+1000); 
    setCookie("stocknews_font_size", fontSize, mydate); 
}