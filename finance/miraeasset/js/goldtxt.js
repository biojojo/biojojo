window.appVersion = window.navigator.appVersion;
if(window.appVersion!=null)
  {
   window.appVersion = window.appVersion.toUpperCase(); 
   window.MacIE5 = ((window.appVersion.toUpperCase().indexOf("MSIE") >=0) && (window.appVersion.toUpperCase().indexOf("MACINTOSH") >=0) && (window.appVersion.indexOf("5.0") >=0));
  }
   
   window.OPR =(window.opera!=null)|| false;
   window.IE = (document.all && (!window.OPR))|| false;
   window.IE55 = (window.IE && window.createPopup!=null && document.createComment==null) || false;
   window.MOZ = (window.outerWidth && !window.OPR && (window.navigator.product!=null)) || false;
   window.IE50 = (window.IE && (document.createTextNode!=null) && (window.createPopup==null)) || false;
   window.IE60= (window.IE && document.createComment!=null ) || false;
   window.IE40 = (document.all && !window.IE50 && !window.IE55 && !window.IE60 &&(window.opera==null) ) || false;
   window.MS =( window.navigator.userAgent.toLowerCase().indexOf("windows") >= 0 ) || false ;
   window.MAC =( window.navigator.appVersion.toLowerCase().indexOf("mac") >= 0 ) || false ;
   window.CSS1 = (document.compatMode!=null)||false;
   window.GDA = (( window.IE55 || window.IE50 || window.MOZ || window.IE60 ) && !window.MAC);
   
   if(window.IE)
     {
      window.WIN98 = (window.navigator.userAgent.toLowerCase().indexOf("windows 98")>=0);
     }

function gObj(ID)
  {
   if(document.getElementById==null)
     {
	    document.getElementById = document.all;
     }
   if(ID==null)
     {
	  return null;
     }
   return document.getElementById(ID);
  }
  
function gTags(srcDocument, TagName)
  {
   if(document.getElementsByTagName==null)
     {
      return (new Array());
     }
   if(TagName==null)
     {
	  return (new Array());
     }
   return srcDocument.getElementsByTagName(TagName);
  }
  
function gAttr(srcObj,attributeName)
  {
   if(srcObj==null || attributeName==null)
     {return null;}
   if(srcObj.getAttribute == null)
     {return null;}
   attributeName = srcObj.getAttribute(attributeName);
   if(attributeName=="")
     {attributeName=null};
   return attributeName;
  }

function RenderNWR()
  {
   if(nwr && (window.IE || window.MOZ) && (!window.MAC))
     {
	  nwr.Hover = false;
	  nwr.onmouseover = function()
	                      {
						   this.Hover = true;
	                      }
	  nwr.onmouseout = function()
	                      {
						   this.Hover = false;
	                      }
	  nwr.style.display = "block";
	  nwr.divs = new Array();
	  var divs = gTags(nwr,"div");
	  var tbs = gTags(nwr,"table");
	  var tds = gTags(nwr,"td");
	  for(i=0;i<tbs.length;i++)
	     {
		  if(gAttr(tbs[i],"width"))
		    {
			 tbs[i].removeAttribute("width");
		    }
	     }
	  for(i=0;i<tds.length;i++)
	     {
		  if(gAttr(tds[i],"width"))
		    {
			 tds[i].removeAttribute("width");
		    }
	     }
	  var scrolldelay = gAttr(nwr,"delay") || 2.5;
	  if(isNaN(scrolldelay ))
	    {
		   nwr.style.display="none";
		   return;
	    }
	  scrolldelay = Math.max(parseFloat(scrolldelay) * 1000 ,1000);
	  for(i=0;i<divs.length;i++)
	     {
          nwr.divs[i] = divs[i];
          divs[i].style.backgroundColor="white";
          divs[i].m = setTimeout("void(0)",0);
          divs[i].n = i;
          divs[i].o = 10;
          divs[i].style.top = nwr.offsetHeight*2 + "px";
          if(divs[i].id==null || divs[i].id == "")
		    {
			 divs[i].id = "_marquee_" + i;
		    }
          divs[i].flyin = function()
		                    {
							 clearTimeout(this.m);
							 this.style.visibility = "visible";
							 var b = this.n-1;
							 if(b<0)
							   {
							    b = nwr.divs.length-1;
							   }
							 if(this.o >0 )
							   {
							    if(this.parentNode.Hover == false)
								  {
								   this.o +=-2;
								   this.style.top = ((this.parentNode.offsetHeight * this.o/10))+ "px";
								  }
							    this.m = setTimeout("gObj('"+this.id+"').flyin()",100);
							   }
							 else
							   {
							    this.o = 0;
								var n = this.n+1;
								if(n > (nwr.divs.length-1))
								  {
								   n =0;
								  }
								n = gObj("_marquee_" + n);
								if(n.id !=this.id)
								  {
								   this.m = setTimeout("gObj('"+this.id+"').flyout()",(scrolldelay));
								   n.m = setTimeout("gObj('"+n.id+"').style.top='900px';gObj('"+n.id+"').flyin()",(scrolldelay-0));
								  }
							   }
		                    }
		  divs[i].flyout = function()
		                     {
							  clearTimeout(this.m);
							  if(this.o < 10 )
							    {
								 if(this.parentNode.Hover == false)
								   {
								    this.o+=2;
									this.style.top = ( -(this.o/10 * this.offsetHeight) -2) + "px";
								   }
								 this.m = setTimeout("gObj('"+this.id+"').flyout()",100);
							    }
							  else
							    {
								 this.o = 10;
								 this.style.top = this.parentNode.offsetHeight*2 + "px";
							    }
		                     }
	     }
		 
	  if(divs.length >0)
	    {
		 divs[0].style.top = "1px";
		 divs[0].flyin();
		}
     }
   else if(nwr)
     {
	  nwr.style.display="block";
	  nwr.style.overflow = "visible";
	  nwr.style.height="auto";
	  var divs = gTags(nwr,"div");
	  if( divs.length>=1)
	    {
		 divs[0].style.position = "static";
		 divs[0].style.visibility = "visible";
		}
     }
  }
  
function RenderNWR98()
  {
   nwr.style.display = "block";
   var divs = gTags(nwr,"div");
   var tbs = gTags(nwr,"table");
   var tds = gTags(nwr,"td");
   for(i=0;i<tbs.length;i++)
      {
	   if(gAttr(tbs[i],"width"))
	     {
		  tbs[i].removeAttribute("width");
		 }
      }
   for(i=0;i<tds.length;i++)
      {
	   if(gAttr(tds[i],"width"))
	     {
		  tds[i].removeAttribute("width");
		 }
      }
   divs = new Array();
   divs = gTags(nwr,"div");
   var marquee = "";
   for(i=0;i<divs.length;i++)
      {
	   marquee+= "<div style='margin:0 0 0.2em 0;white-space:nowrap;display:block;visibility:visible;position:static;'>" + divs[i].innerHTML+ "</div>";
	  }
   nwr.innerHTML = "<marquee direction=up scrolldelay=200 scrollamount=1 onmouseover='this.stop()' onmouseout='this.start()'>" + marquee +"</marquee>" ;
  }
  
 
 
var old_img = '';

function showimg(img) {

        if( old_img != img ) {

                if( old_img !='' ) {
                        old_img.style.display = 'none';
                }
	
                img.style.display = 'block';
                old_img = img;

        } 
}

/////////////////////////////////////////////////////////////
function showInfo(infoId, infoNo)
{
	var infoCollection = document.getElementById(infoId);
	infoCollection.className='sInfo'+infoNo+'v';
}
/////////////////////////////////////////////////////////////
function showmem(memId, memNo)
{
	var memCollection = document.getElementById(memId);
	memCollection.className='smem'+memNo+'v';
}
/////////////////////////////////////////////////////////////

function showPick(PickId, PickNo)
{
	var PickCollection = document.getElementById(PickId);
	PickCollection.className='Pick'+PickNo+'v';
}
/////////////////////////////////////////////////////////////

function showChoice(ChoiceId, ChoiceNo)
{
	var ChoiceCollection = document.getElementById(ChoiceId);
	ChoiceCollection.className='Choice'+ChoiceNo+'v';
}
/////////////////////////////////////////////////////////////
function showComs(ComsId, ComsNo)
{
	var ComsCollection = document.getElementById(ComsId);
	ComsCollection.className='Coms'+ComsNo+'v';
}
/////////////////////////////////////////////////////////////
var old_menu = '';
function showsubmenu(submenu) {

        if( old_menu != submenu ) {

                if( old_menu !='' ) {
                        old_menu.style.display = 'none';
                }
	
                submenu.style.display = 'block';
                old_menu = submenu;


        } 
}

var old_companies = '';

function showcompanies(companies) {

        if( old_companies != companies ) {

                if( old_companies !='' ) {
                        old_companies.style.display = 'none';
                }
	
                companies.style.display = 'block';
                old_companies = companies;

        } 
}




var old_Platters = '';
function showPlatters(Platters) {
        if( old_Platters != Platters ) {
                if( old_Platters !='' ) {
                        old_Platters.style.display = 'none';
                }
	                Platters.style.display = 'block';
                old_Platters = Platters;
        } 
}