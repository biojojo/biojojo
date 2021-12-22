
function setfund(checkbox)
{
	var FormLength = document.FormResults_Compare.length - 2 ;
	//alert(FormLength);
	if(checkbox.checked == true)
	{
		document.FundList_01.checknum.value ++;
		if(document.FundList_01.checknum.value >= 6)
		{
			alert("您選擇的基金指數數目已經超過五筆!");
			checkbox.checked = false;
			document.FundList_01.checknum.value --;
			return;
		}
		else
		{
			// 取得點選的 CheckBox 的 value 
			var checkBoxValue = checkbox.value;

			
			if (document.FundList_01.checknum2.value == 999)
			{
				for (i=0;i<=FormLength;i++)
				{
					if (document.FormResults_Compare.elements[i].value == "" )
					{
						document.FormResults_Compare.elements[i].value = checkbox.value;
						document.FundList_01.checknum2.value = i ;
						//return;
						break;
					}
				}
			}
			else if (document.FundList_01.checknum2.value < 999)
			{
				for (i=0;i<=FormLength;i++)
				{
					if (document.FormResults_Compare.elements[i].value == "" )
					{
						document.FormResults_Compare.elements[i].value = checkbox.value;
						document.FundList_01.checknum2.value = i ;
						break;
					}
				}				
			}
			
		}
	}
	else if (checkbox.checked == false)
	{
		document.FundList_01.checknum.value --;
		var checkBoxValue = checkbox.value;
		for (i=0;i<=FormLength;i++)
		{
			if (document.FormResults_Compare.elements[i].value == checkBoxValue)
			{
				document.FormResults_Compare.elements[i].value = "";
				  
				  for (ii=0;ii<=FormLength;ii++)
				  {
				  	if (document.FormResults_Compare.elements[ii].value == "")
				  	{
				  		document.FundList_01.checknum2.value = i;
				  		break;
				  	}				  	
				}
				break;
			}
			//document.FundList_01.checknum.value --;
			else if (document.FormResults_Compare.elements[i].value != checkBoxValue)
			{
			}
			
			
		
			
		}
	}
	else
	{
		//eval("document.FundList_01."+"fund"+(document.FundList_01.checknum.value)+".value=null");
		//document.FundList_01.checknum.value --;
		alert("err else");
	}
}
