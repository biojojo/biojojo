// 內容展開(理財小秘書)
function Item_onclick(n)
	{
        var ifg;
		//var objdiv = document.getElementById.tags("div");
		
		for(i=1;i<4;i++)
		{
			if(n!=i)
			document.getElementById("divs" + i).className="disyhidn";;
		}
		
		if(document.getElementById("divs" + n).className=="disyhidn")
		{
            ifg = true;
			document.getElementById("divs" + n).className="disyshow"; 
                       
 		}
 		else 
 		{
            ifg = false;
			document.getElementById("divs" + n).className="disyhidn";
		}

            var objElement = top.document.getElementById("left");


            if (objElement && (!isNaN(objElement.innerHTML)))
            {
               if (ifg)
                   objElement.height = 1100;
               else
                   objElement.height = Number(objElement.innerHTML);
            }
	}

	       function Item_onmouseover(obj)
	       {
	          obj.className="subItem1";
	       }
	       function Item_onmouseout(obj)
	       {
	          obj.className="subItem";
	       }