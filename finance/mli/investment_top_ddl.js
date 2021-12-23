     function fundTran1PoP_Sumit()
     {
         DateNow1 = new Date();
         var dOut=document.getElementById("sd4Out").value;
         var TodayDate= DateNow1.getFullYear()+"/"+DateMonth_AddZero(DateNow1.getMonth()+1) +"/"+DateMonth_AddZero(DateNow1.getDate()) ;
            
         dOut = dOut.replace(/-/g, "/");
         TodayDate = TodayDate.replace(/-/g, "/");
         dOut = new Date(dOut);
         TodayDate = new Date(TodayDate);

         var days= dOut.getTime() - TodayDate.getTime(); 
         var time = parseInt(days / (1000 * 60 * 60 * 24)); 
         //  alert(time);                  
         if(time >=0)   
         {
           alert('轉出日期必須是今天以前的日期!');     
           return false;
         }            
         
        if(document.getElementById("sd4Out").value=='')
        {
           alert('請輸入 轉出日期!');     
            document.getElementById("sd4Out").focus(); 
           return false;
        }
        
        if(document.getElementById("sd4In").value=='')
        {
           alert('請輸入 轉入日期!');  
            document.getElementById("sd4In").focus();   
           return false;
        } 
       
       
        if(document.getElementById("fundTran1PoPRadio1").checked == true )
        {        
              if ( document.getElementById("MoneyText4").value == '' ||  document.getElementById("MoneyText4").value == '請輸入金額')
              {
                alert("請輸入 \"金額\" 。"); 
                document.getElementById("MoneyText4").focus();   
                return false; 
              } 
                   
              if ( !isNaN(document.getElementById("MoneyText4").value) == false)   
              {                  
                alert("請輸入 正確金額。"); 
                document.getElementById("MoneyText4").focus(); 
                return false;
              } 
              
              var money1=document.getElementById("MoneyText4").value;
              var MarketTotal=document.getElementById("HF_fundTran1PoP_MarketTotal").value;
                             
             
              if(parseFloat(money1)>parseFloat(MarketTotal))
              {
                 alert("轉出金額 不可大於 此基金市值。"); 
                 document.getElementById("MoneyText4").focus(); 
                return false;
              }
        }
        else if(document.getElementById("fundTran1PoPRadio2").checked == true )
        {
              if ( document.getElementById("UnitText4").value == '' ||  document.getElementById("UnitText4").value == '請輸入單位')
              {
                alert("請輸入 \"單位\" 。"); 
                document.getElementById("UnitText4").focus();   
                return false; 
              } 
                   
              if ( !isNaN(document.getElementById("UnitText4").value) == false)   
              {                  
                alert("請輸入 正確單位。"); 
                document.getElementById("UnitText4").focus(); 
                return false;
              } 
              
              var unit1=document.getElementById("UnitText4").value;
              var TotalAmount=document.getElementById("HF_fundTran1PoP_TotalAmount").value;
                          
              if(parseFloat(unit1)>parseFloat(TotalAmount))
              {
                 alert("轉出單位 不可大於 此基金持有單位數。"); 
                 document.getElementById("MoneyText3").focus(); 
                return false;
              }
         }
                  
         if(document.getElementById("HF_fundTran1PoP_In_fundId").value=='')
         {
           alert('請選擇轉入基金名稱!');     
           return false;
         }         
        // return false;
         
     }   
     
         
     function dd_fund_PopOnchange()
     {           
       var Value1=document.getElementById("dd_fund_Pop").options[document.getElementById("dd_fund_Pop").options.selectedIndex].value;
       document.getElementById("HF_fundTran1PoP_In_fundId").value=Value1;
      // alert(document.getElementById("HF_fundTran1PoP_In_fundId").value);//HF_fundTran1PoP_In_fundId
     }
     
     
     function fundTran1PoPShow(name1,fundid,MasterId,MarketTotal,TotalAmount,ClassCurrencyCode)
     {
       document.getElementById("fundTran1PoPRadio1").checked=true;

       document.getElementById("fundTran1PoPname").innerHTML=name1; 
       document.getElementById("HF_fundTran1PoP_MarketTotal").value=MarketTotal; 

       document.getElementById("HF_fundTran1PoP_TotalAmount").value=TotalAmount; 
       //幣別
        document.getElementById("HF_ClassCurrencyCode").value=ClassCurrencyCode;
       
       document.getElementById("HF_fundTran1PoP_MasterId").value=MasterId; 
       document.getElementById("HF_fundTran1PoP_fundId").value=fundid;     
       
      // alert(document.getElementById("HF_ClassCurrencyCode").value);     
       
     }
          
     function fundBackPoP_Sumit()
     {
     
       if ( document.getElementById("sd3").value == '')
       {
                alert("日期不可空白!"); 
                document.getElementById("sd3").focus();   
                return false; 
       }
     
        if(document.getElementById("fundBackPoPRadio1").checked == true )
        {        
              if ( document.getElementById("MoneyText3").value == '' ||  document.getElementById("MoneyText3").value == '請輸入金額')
              {
                alert("請輸入 \"金額\" 。"); 
                document.getElementById("MoneyText3").focus();   
                return false; 
              } 
                   
              if ( !isNaN(document.getElementById("MoneyText3").value) == false)   
              {                  
                alert("請輸入 正確金額。"); 
                document.getElementById("MoneyText3").focus(); 
                return false;
              } 
              
              var money1=document.getElementById("MoneyText3").value;
              var MarketTotal=document.getElementById("HF_fundBackPoP_MarketTotal").value;
                             
              if(parseFloat(money1)>parseFloat(MarketTotal))
              {
                 alert("贖回金額 不可大於 此基金市值。"); 
                 document.getElementById("MoneyText3").focus(); 
                return false;
              }
        }
        else if(document.getElementById("fundBackPoPRadio2").checked == true )
        {
              if ( document.getElementById("UnitText3").value == '' ||  document.getElementById("UnitText3").value == '請輸入單位')
              {
                alert("請輸入 \"單位\" 。"); 
                document.getElementById("UnitText3").focus();   
                return false; 
              } 
                   
              if ( !isNaN(document.getElementById("UnitText3").value) == false)   
              {                  
                alert("請輸入 正確單位。"); 
                document.getElementById("UnitText3").focus(); 
                return false;
              } 
              
              var unit1=document.getElementById("UnitText3").value;
              var TotalAmount=document.getElementById("HF_fundBackPoP_TotalAmount").value;
                             
              if(parseFloat(unit1)>parseFloat(TotalAmount))
              {
                 alert("贖回單位 不可大於 此基金持有單位數。"); 
                 document.getElementById("MoneyText3").focus(); 
                return false;
              }
         }
        
     }   
      
     
      function fundBackPoPShow(name1,MarketTotal,TotalAmount,fundid,MasterId,ClassCurrencyCode)
       {
          document.getElementById("fundBackPoPRadio1").checked=true;
          document.getElementById("HF_fundBackPoP_TotalAmount").value=TotalAmount; 
          document.getElementById("HF_fundBackPoP_MarketTotal").value=MarketTotal; 

         //幣別
          document.getElementById("HF_ClassCurrencyCode").value=ClassCurrencyCode;
          document.getElementById("HF_fundBackPoP_MasterId").value=MasterId; 
          document.getElementById("HF_fundBackPoP_fundId").value=fundid;          
          document.getElementById("fundBackPoPname").innerHTML=name1;
          // alert(document.getElementById("HF_ClassCurrencyCode").value); 
       }   
      
      
       function fundAddPoPShow(name1,MasterId,FundId)
        {
          document.getElementById("HF_fundAddPoP_MasterId").value=MasterId; 
          document.getElementById("HF_fundAddPoP_fundId").value=FundId; 
          document.getElementById("fundAddPoP_Name").innerHTML=name1; 
                   
        }    
              
        function Page_loadShow()
        {
           var fundgroup_value = getQuerystring('fundGroup1');
           var fund_code = getQuerystring('code');
           var fund_type = getQuerystring('type');
           
           if(fund_code!='' && fund_type!='')
           {
             if(fund_type=='d')
             {         
               ShowDetailList(fund_code)
             }
           }      
        }   
    
            
        function ShowDetailList(code)
        {
           var resultElement =document.getElementById("DetailContetShow3" + code);        
           
           var sumitValue1=code;
           
           var fundgroup_value = getQuerystring('fundGroup1');
           
           if(fundgroup_value==null ||fundgroup_value=='')
           {
             fundgroup_value="1";
           }   
           
          
           if(document.getElementById("DetailContetShow2"+code).style.display=="none")
           {             
              if(document.getElementById("DetailContetShow3" + code).innerHTML =="")
              {       
                  //--顯示Loading動畫
                  BOX_show("loadingDiv");
                  
                  $.get("../myInvestment/myInvestment_ReturnDetail.aspx" /*url, 不含 querystring*/ ,
                    "MasterCode="+encodeURI(sumitValue1) + "&fundGroup1=" + fundgroup_value  + "&R=" + Math.random() /*參數 (querystring)*/,

                     function(r) /*回傳的處理函式*/       
                     {                               
                       document.getElementById("DetailContetShow2"+code).style.display="";
                       $("#DetailContetShow3" + code).html(r);      
                        //--關閉Loading動畫
                        BOX_remove("loadingDiv");
                      }    
                    );   
              }
              else 
              {    
                 document.getElementById("DetailContetShow2" + code).style.display="";              
              }
              document.getElementById("DetailContetShow1"+code).className="tabclose";    
          } 
          else 
          {           
              document.getElementById("DetailContetShow1"+code).className="tabopen";
              document.getElementById("DetailContetShow2" + code).style.display="none"; 
          }
       } 

       function cautionPoPShow(masterId,name1,type1,v1,v2)
        {
          document.getElementById("cautionHF1").value=masterId; 
          document.getElementById("cautionFundName").innerHTML=name1; 
          
          if(type1=="1")
          {         
             document.getElementById("cautionRadio1").checked = true ; 
             document.getElementById("cautionPercent1").value=v1;
             document.getElementById("cautionPercent2").value=v2; 
             document.getElementById("cautionMoney1").value='10000'; 
             document.getElementById("cautionMoney2").value='10000'; 
          }
          else if(type1=="2")
          {
             document.getElementById("cautionRadio2").checked = true ;  
             document.getElementById("cautionMoney1").value=v1;
             document.getElementById("cautionMoney2").value=v2;
             document.getElementById("cautionPercent1").value='10';
             document.getElementById("cautionPercent2").value='10'; 
          }       
        } 
        /*-- 顯示合計的停損停利警示設定視窗[20100811 JerryLi] --*/
        function cautionTotalPoPShow(gId,gName,gType,gVal,gValMinus)
        {
          document.getElementById("cautionGroupId").value=gId; 
          document.getElementById("cautionFundNameTotal").innerHTML=gName + " - 合計"; 
          
          if(gType=="1")
          {         
             document.getElementById("cautionRadioTotal1").checked = true ; 
             document.getElementById("cautionPercentTotal1").value=gVal;
             document.getElementById("cautionPercentTotal2").value=gValMinus; 
             document.getElementById("cautionMoneyTotal1").value='10000'; 
             document.getElementById("cautionMoneyTotal2").value='10000'; 
          }
          else if(gType=="2")
          {
             document.getElementById("cautionRadioTotal2").checked = true ;  
             document.getElementById("cautionPercentTotal1").value='10';
             document.getElementById("cautionPercentTotal2").value='10'; 
             document.getElementById("cautionMoneyTotal1").value=gVal;
             document.getElementById("cautionMoneyTotal2").value=gValMinus;             
          }       
        }            
/* ddl 123 start */

        function BOX_show(e){ 
        if($get(e)==null){return;}
        BOX_layout(e);
        window.onresize = function(){BOX_layout(e);} 
        window.onscroll = function(){BOX_layout(e);} 
         }
         
        /*-- 開啟或關閉投資組合區塊[20100804 JerryLi] --*/
        function myfund_top_show() 
        {
            if(document.getElementById('myfundtop1').style.display == "none")
            {
                document.getElementById('myfundtop1').style.display="block";
            }
            else
            {
                document.getElementById('myfundtop1').style.display="none";
            }
        }

          function myfund_top_close()
          {
            document.getElementById('myfundtop1').style.display="none";
          } 
        /*-- 修改投資組合名稱時需檢查不可空白[20100809 JerryLi] --*/
        function CheckUpdateName()
        {
            if(document.getElementById("myFundtext1").value == '')
            {
                  alert("投資組合名稱不可空白！！"); 
                  return false;
            }
            return true;
        }         
           function SubmitOnClick()
           {
                        
              if ( document.getElementById("ChoiceFundName").value == '')
               {
                    alert("請先選擇 \"基金\" 。"); 
                    document.getElementById("ChoiceFundName").focus(); 
                    return false;
               } 
               
               if ( document.getElementById("MoneyText").value == '' ||  document.getElementById("MoneyText").value == '請輸入金額')
               {
                    alert("請輸入 \"金額\" 。"); 
                    document.getElementById("MoneyText").focus();   
                    return false; 
               } 
               
               if ( !isNaN(document.getElementById("MoneyText").value) == false)   
                    {                  
                      alert("請輸入 正確金額。"); 
                      document.getElementById("MoneyText").focus(); 
                      return false;
                    } 
               
                var selValue;
                var table = document.getElementById("RadioButtonList1");

                for(i=0;i<table.rows[0].cells.length;i++)
                     if(table.rows[0].cells[i].childNodes[0].checked == true)
                      selValue = table.rows[0].cells[i].childNodes[0].value;
                 
               var d1= document.getElementById("sd1").value;
               var d2= document.getElementById("ed1").value;  
               
               if(d1=="")
               {
		         alert("請輸入申購日期");
		         document.getElementById("sd1").focus();
		         return false;
	           }		
	           
	           if(!CheckDate(d1))
	           {
		            alert("您輸入的申購日期不正確！\n請注意日期格式（如：2010/07/17）！"); 
		            document.getElementById("sd1").focus();
		            return false;
	           }
	            
	            
                if(selValue == "單筆")
                {
                   //暫時不用 取消                                                                                
                }   
                else if(selValue == "定期定額") 
                {               
                    if(d2=="")
	                {
		                alert("請輸入結止日期");
		                document.getElementById("ed1").focus();   
		                return false;
	                }		
	                if(!CheckDate(d2))
	                { 
		                alert("您輸入的結止日期不正確！\n請注意日期格式（如：2010/07/17）！");
		                document.getElementById("ed1").focus();    
		                return false;
	                }
	                   
	                 d1 = d1.replace(/-/g, "/");
                     d2 = d2.replace(/-/g, "/");
                     d1 = new Date(d1);
                     d2 = new Date(d2);

                     var days= d1.getTime() - d2.getTime(); 
                     var time = parseInt(days / (1000 * 60 * 60 * 24)); 
                     
                     if(time >=0 || time < -1826) 
                     { 
                       if(time >=0)
                       {
                         alert('截止日期 不得大於等於 申購日期!');     
                          return false;
                       }
                       
//                       if(time < -1826)
//                       {
//                         alert('截止日和申購日 相差不得大於5年!');   
//                          return false;
//                       }
                     }
                     
                     if(time >= -60)
                     {
                         alert('截止日和申購日 相差必須大於二個月!');
                          return false;
                     }
                     
                }
          
           }
           
            function BOX_remove(e){ 
        window.onscroll = null;
        window.onresize = null;
        $get('BOX_overlay').style.display="none";
        $get(e).style.display="none";
             }
           
           function SumitOnClick2PoP()
           {                       
                             
               if ( document.getElementById("MoneyText2").value == '' ||  document.getElementById("MoneyText2").value == '請輸入金額')
               {
                    alert("請輸入 \"金額\" 。"); 
                    document.getElementById("MoneyText2").focus();   
                    return false; 
               }                
              
               if ( !isNaN(document.getElementById("MoneyText2").value) == false)   
                    {                  
                      alert("請輸入 正確金額。"); 
                      document.getElementById("MoneyText2").focus(); 
                      return false;
                    } 
               
                var selValue;
                
                 
               var d1= document.getElementById("sd2").value;
               var d2= document.getElementById("ed2").value;  
               
               if(d1=="")
               {
		         alert("請輸入申購日期");
		         document.getElementById("sd2").focus();
		         return false;
	           }		
	           
	           if(!CheckDate(d1))
	           {
		            alert("您輸入的申購日期不正確！\n請注意日期格式（如：2010/07/17）！"); 
		            document.getElementById("sd2").focus();
		            return false;
	           }
	            
	                             
                if(document.getElementById("RadioButtonList2_1").checked==true) 
                {               
                    if(d2=="")
	                {
		                alert("請輸入結止日期");
		                document.getElementById("ed2").focus();   
		                return false;
	                }		
	                if(!CheckDate(d2))
	                { 
		                alert("您輸入的結止日期不正確！\n請注意日期格式（如：2010/07/17）！");
		                document.getElementById("ed2").focus();    
		                return false;
	                }
	                   
	                 d1 = d1.replace(/-/g, "/");
                     d2 = d2.replace(/-/g, "/");
                     d1 = new Date(d1);
                     d2 = new Date(d2);

                     var days= d1.getTime() - d2.getTime(); 
                     var time = parseInt(days / (1000 * 60 * 60 * 24)); 
                     
                     if(time >=0 || time < -1826) 
                     { 
                       if(time >=0)
                       {
                         alert('截止日期 不得大於等於 申購日期!');     
                          return false;
                       }
                       
//                       if(time < -1826)
//                       {
//                         alert('截止日和申購日 相差不得大於5年!');   
//                          return false;
//                       }
                     }
                     
                     if(time >= -60)
                     {
                         alert('截止日和申購日 相差必須大於二個月!');
                          return false;
                     }
                     
                }
          
           }
         
           function RadioButtonChoice()
           {            
                var selValue;
                var table = document.getElementById("RadioButtonList1");   
                
                for(i=0;i<table.rows[0].cells.length;i++)
                     if(table.rows[0].cells[i].childNodes[0].checked == true)
                      selValue = table.rows[0].cells[i].childNodes[0].value;
                      
                if(selValue=="單筆")
                {
                  document.getElementById("ShowOrHidden1").style.visibility  = 'hidden';
                } 
                else
                {
                  document.getElementById("ShowOrHidden1").style.visibility  = 'visible';
                }   
           } 
           
           function RadioButtonChoice2()
           {            
                
                if(document.getElementById("RadioButtonList2_0").checked==true)
                {
                   document.getElementById('ed2Show1').style.display="none";
                   document.getElementById('UserChoiceRegular2Show1').style.display="none";
                } 
                else
                {
                   document.getElementById('ed2Show1').style.display="";
                   document.getElementById('UserChoiceRegular2Show1').style.display="";
                }   
           }                                                                       
                  
           function ChoiceFundFunction()
           {
              document.getElementById("ChoiceFundName").value=document.getElementById("dd_fund1").options[document.getElementById("dd_fund1").options.selectedIndex].text;
              document.getElementById("ChoiceFundId").value = document.getElementById("dd_fund1").options[document.getElementById("dd_fund1").options.selectedIndex].value;
           }
           
                     
           function myfund_Company_DDlchange(fromId,ToId,type1)   
            { 
              // Clear
              while ( document.getElementById(ToId).options.length > 0) 
              { 
                   document.getElementById(ToId).options[0] = null; 
              }
              
              var sumitValue1=document.getElementById(fromId).options[document.getElementById(fromId).options.selectedIndex].value;
              var url1="DDL_returnData.aspx?type1="+type1+"&v1="+encodeURI(sumitValue1) + "&R=" + Math.random();  
                
              HttpRequest_Data_And_DDl_MarkOne(url1,ToId);
            }  
            
            function fund1_DDlchange(fromId,ToId)   
            {     
               
                //Clear
                while ( document.getElementById("dd_fund1").options.length > 0) 
                { 
                   document.getElementById("dd_fund1").options[0] = null; 
                }                                
                
               var dd_level1Value1=document.getElementById("dd_level1").value;                               
               
               var type1='';
               if(dd_level1Value1=='自選基金') 
               {
                 type1='2';
               }
               else if(dd_level1Value1=='國內基金' || dd_level1Value1=='海外基金' || dd_level1Value1=='國內/海外')
               {
                 type1='3';
               }                               
              
               var sumitValue1=document.getElementById(fromId).options[document.getElementById(fromId).options.selectedIndex].value;//document.getElementById(fromId).value;
               var url1="DDL_returnData.aspx?type1=" + type1+"&v1="+encodeURI(sumitValue1) + "&R=" + Math.random();  

               HttpRequest_Data_And_DDl_MarkTwo(url1,ToId);                  
            }    
            
             
            function fundTran1_company(ToId,type1)   
            { 
              // Clear
              while ( document.getElementById('dd_company_Pop').options.length > 0) 
              { 
                   document.getElementById('dd_company_Pop').options[0] = null; 
              }
              
              var sumitValue1='國內/海外';
              var url1="DDL_returnData.aspx?type1="+type1+"&v1="+encodeURI(sumitValue1) + "&R=" + Math.random();  
                
             // document.getElementById("dd_company_Pop").options[0]=new Option('1','請選擇轉入基金公司');
                
               HttpRequest_Data_And_DDl_MarkOne(url1,ToId);
            }   
            
             function fundTran1_DDlchange(fromId,ToId)   
            {     
               
                //Clear
                while ( document.getElementById(ToId).options.length > 0) 
                { 
                   document.getElementById(ToId).options[0] = null; 
                }                                
                        
               var type1='3';                                            
              
               var sumitValue1=document.getElementById(fromId).options[document.getElementById(fromId).options.selectedIndex].value;//document.getElementById(fromId).value;
               var url1="DDL_returnData.aspx?type1=" + type1+"&v1="+encodeURI(sumitValue1) + "&R=" + Math.random();  

              HttpRequest_Data_And_DDl_MarkTwo(url1,ToId);
                  
            }    
            
            function HttpRequest_Data_And_DDl_MarkOne(url1,ToId) 
            {
              
                  var httpRequest = AjaxRequest() ;
                   httpRequest.abort(); 
                                                       
                   if (httpRequest) 
                   {
                      httpRequest.onreadystatechange = function()
                      {               
                        if (httpRequest.readyState == 4 && httpRequest.status == 200)
                        {
                           var result = httpRequest.responseText;
                     
                           var mystr2=result.split(";");           
                           for(i=0;i<mystr2.length;i++)  
                           {
                             document.getElementById(ToId).options[i]=new Option(mystr2[i],mystr2[i]);
                           }           
                        }                    
                      } 
                      
                      httpRequest.open("GET",url1,true);
                      httpRequest.send(null);   
                  }
            
            }
            
            function HttpRequest_Data_And_DDl_MarkTwo(url1,ToId)
            {
              
                   var httpRequest = AjaxRequest() ;   
                   httpRequest.abort(); 
                                                       
                   if (httpRequest) 
                   {
                      httpRequest.onreadystatechange = function()
                      {               
                        if (httpRequest.readyState == 4 && httpRequest.status == 200)
                        {
                           var result = httpRequest.responseText;
                     
                           var mystr2=result.split(";");           
                           for(i=0;i<mystr2.length;i++)  
                           {
                             var mystr3=mystr2[i].split(":"); 
                             document.getElementById(ToId).options[i]=new Option(mystr3[0],mystr3[1]);
                           }           
                        }                    
                      } 
                      
                      httpRequest.open("GET",url1,true);   
                      httpRequest.send(null);   
                  }
            
            }
           
            function fund1_search(ToId)
            {      
                                                                        
               var type1='4';                                                       
               var sumitValue1=document.getElementById("searhText").value;
               if(sumitValue1 !='') 
                {   
                    //Clear
                    while ( document.getElementById("dd_fund1").options.length > 0) 
                    { 
                       document.getElementById("dd_fund1").options[0] = null; 
                    } 
                    
                    var url1="DDL_returnData.aspx?type1=" + type1+"&v1="+encodeURI(sumitValue1) + "&R=" + Math.random();  

                     HttpRequest_Data_And_DDl_MarkTwo(url1,ToId);             
                    
                }  
                else  if(document.getElementById("searhText").value == "" || document.getElementById("searhText").value == "請輸入標的名稱")
                {        
                        alert('請輸入標的名稱'); 
                        return false;
                }
            }  
                             
             function fundnamesearch12(e,k)
             {
               if(e.keyCode==13)
               {
                 document.getElementById("Button22").click();
                 return false;
               }
             } 
                     
          /*  ddl 123 end */                
                               
          
          /* LinkText12 start *********************************** */
            function getQuerystring(key, default_) 
            {
                  if (default_==null) default_="";  
                  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]"); 
                  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)"); 
                  var qs = regex.exec(window.location.href); 
                  if(qs == null)
                    return default_;
                  else
                    return qs[1];
            }
    
                         
             function LinkText12_Js()
             {
                   var fundgroup_value = getQuerystring('fundGroup1');
                   if(fundgroup_value=='')
                   {
                      fundgroup_value='1';   
                   }
                  
                   var url2="DDL_returnData.aspx?type1=linktext12&v1=no"+ "&R=" + Math.random();      
                    
                   var httpRequest = AjaxRequest() ;
                   httpRequest.abort(); 
                                                       
                   if (httpRequest) 
                   {
                      httpRequest.onreadystatechange = function()
                      {               
                        if (httpRequest.readyState == 4 && httpRequest.status == 200)
                        {
                           var result = httpRequest.responseText;
                                  
                           LinkText12_Js_Htm(result,fundgroup_value);          
                        }                    
                      }
                      
                      httpRequest.open("GET",url2,true);
                      httpRequest.send(null);   
                  }       
             }
               
             function DateMonth_AddZero(v1)
             {
               
               var returnValue;
               if(v1<10)
               {
                 returnValue='0'+v1;
               }
               else
               {
                 returnValue=v1;
               }
              
               return returnValue;
               
             }
             
             
             
             function  LinkText12_Js_Htm(value1,type1)
             {
               var LinkStr1='';
               var LinkStr2='';
               var Url1="myInvestment.aspx?fundGroup1=";
               var LinkArray=value1.split(",");  
                            
                              
               for(i=0;i<LinkArray.length;i++)  
               {
                    if (type1 == (i+1).toString())
                    {
                        document.getElementById("myFundtext1").value=LinkArray[i];
                        LinkStr1 += "<li class=\"current\"><a href=\"" + Url1 + (i+1).toString() + "\">" + LinkArray[i] + "</a></li>";
                        LinkStr2 += "<a href=\"" + Url1 + (i+1).toString() + "\" class=\"current\">" + LinkArray[i] + "</a>";
                    } 
                    else
                    {
                        LinkStr1 += "<li ><a href=\"" + Url1 + (i+1).toString() + "\">" + LinkArray[i] + "</a></li>";
                        LinkStr2 += "<a href=\"" + Url1 + (i+1).toString() + "\">" + LinkArray[i] + "</a>";
                    }
               }  

               document.getElementById("L_linkText1").innerHTML=LinkStr1;   
               document.getElementById("L_linkText2").innerHTML=LinkStr2; 
             
             }
             
            LinkText12_Js();
            window.myfund_Company_DDlchange('dd_level1','dd_level2','1');
            //--以預設關閉
            //myfund_top_close()
            fundTran1_company('dd_company_Pop','1')
                        
            DateNow1 = new Date();
            
            document.getElementById("sd4In").value=DateNow1.getFullYear()+"/"+DateMonth_AddZero(DateNow1.getMonth())+"/"+DateMonth_AddZero(DateNow1.getDate()) ;
            document.getElementById("sd4Out").value=DateNow1.getFullYear()+"/"+DateMonth_AddZero(DateNow1.getMonth()) +"/"+DateMonth_AddZero(DateNow1.getDate()) ;
           
            document.getElementById("sd1").value=DateNow1.getFullYear()-1+"/"+DateMonth_AddZero(DateNow1.getMonth())+"/"+DateMonth_AddZero(DateNow1.getDate()) ;
            document.getElementById("ed1").value=DateNow1.getFullYear()+"/"+DateMonth_AddZero(DateNow1.getMonth()) +"/"+DateMonth_AddZero(DateNow1.getDate()) ;
           
            document.getElementById("sd2").value=DateNow1.getFullYear()-1+"/"+DateMonth_AddZero(DateNow1.getMonth())+"/"+DateMonth_AddZero(DateNow1.getDate()) ;
            document.getElementById("ed2").value=DateNow1.getFullYear()+"/"+DateMonth_AddZero(DateNow1.getMonth()) +"/"+DateMonth_AddZero(DateNow1.getDate()) ;
           
            document.getElementById("sd3").value=DateNow1.getFullYear()+"/"+DateMonth_AddZero(DateNow1.getMonth())+"/"+DateMonth_AddZero(DateNow1.getDate()) ;


            RadioButtonChoice();
           
            //刪除詳細時要展開的功能
            Page_loadShow();
            
           /* LinkText12 end ************************************** */ 
           
            function BOX_layout(e){ 
        
                var a = $get(e);
                if ($get('BOX_overlay')==null){ 
                    var overlay = document.createElement("div");
                    overlay.setAttribute('id','BOX_overlay');
                    overlay.onclick=function(){BOX_remove(e);};
                    a.parentNode.appendChild(overlay);
                }
              
                var scrollLeft = (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
                var scrollTop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
                var clientWidth;
                if (window.innerWidth) {
                    clientWidth = ((Sys.Browser.agent === Sys.Browser.Safari) ? window.innerWidth : Math.min(window.innerWidth, document.documentElement.clientWidth));
                } else {
                    clientWidth = document.documentElement.clientWidth;   
                }
                var clientHeight;
                if (window.innerHeight) {
                    clientHeight = ((Sys.Browser.agent === Sys.Browser.Safari) ? window.innerHeight : Math.min(window.innerHeight, document.documentElement.clientHeight));
                } else {   
                    clientHeight = document.documentElement.clientHeight;   
                }   
                var bo = $get('BOX_overlay');
                bo.style.left = scrollLeft+'px';
                bo.style.top = scrollTop+'px';
                bo.style.width = clientWidth+'px';
                //bo.style.height = clientHeight+'px';
                bo.style.display="";
           
                a.style.position = 'absolute';
                a.style.zIndex=101;
                a.style.display="";
                a.style.left = scrollLeft+((clientWidth-a.offsetWidth)/2)+'px';
                a.style.top = scrollTop+((clientHeight-a.offsetHeight)/2)+'px';
            }
             
           
           
         function CheckDate(str)
         {
	         //在JavaScript中，正則表達式只能使用"/"開頭和結束，不能使用雙引號
	        var Expression=/^((((1[6-9]|[2-9]\d)\d{2})(\/|\-)(0?[13578]|1[02])(\/|\-)(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(\/|\-)(0?[13456789]|1[012])(\/|\-)(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})(\/|\-)0?2(\/|\-)(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/; 
	        var objExp=new RegExp(Expression);
	        if(objExp.test(str)==true)
	        {
		        return true;
	        }
	        else
	        {
		        return false; 
	        }
         }
         
         



