function moveitcenter() 
{ 

document.getElementById("defin").style.display="block";
//document.getElementById("defin").style.left=((document.body.offsetWidth-550)/2)+document.body.scrollLeft;
//document.getElementById("defin").style.top=((800-550)/2)+document.body.scrollTop;

}


function thisclose()
{
  document.getElementById('defin').style.display="none";
}

var ie=document.all; 
var nn6=document.getElementById&&!document.all; 
var isdrag=false; 
var y,x; 
var oDragObj; 


