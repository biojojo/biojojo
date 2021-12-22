
    function Page_Load() {
      document.forms[0].elements[0].focus();
    }
    
    function NumberChk(obj) {
    
      if ((event.keyCode < 48) || (event.keyCode > 57))
      event.keyCode = 0;
    }
	
	function UpEngNumChk(obj) {
    
      if ((event.keyCode < 48) || ((57 < event.keyCode && event.keyCode < 65)) || (90 < event.keyCode))
      event.keyCode = 0;
	  
    }
	
    /*
    function NumberChk2(obj) {
    
      var getNumberLength = obj.value.length;
      if (getNumberLength==1) {
      	
      	  var var getNumber = obj.value.charCodeAt(0);
      	  alert(getNumber);
      	}
      
     */ 
      
      //if ((event.keyCode < 48) || (event.keyCode > 57))
      //event.keyCode = 0;
      

    
    function getFocus(obj) {
      obj.style.color='#333333';
      obj.style.background='#D7F2FF';      
    }
    
    function getBlur(obj){
      obj.style.color='#000000';
      obj.style.background='white';
    }


    function selectText(obj){
      obj.select();
    }    
    
    
    
