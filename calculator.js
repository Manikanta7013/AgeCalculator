function age(){
    let firstdate=document.getElementById("date").value; 
    
    let firstmonth=document.getElementById("month").value;  
    
    
    let firstyear=document.getElementById('year').value;    
    var arr=[31,28,31,30,31,30,31,31,30,31,30,31];
  
    
    if(firstdate>=32 || firstmonth>=13 ||firstdate>arr[1]){
      alert("error");
    }else{            
      var date = new Date();
      var enddate = date.getDate();
     
      var endmonth= 1+date.getMonth();
     
      var endyear = date.getFullYear();
     
                                      
      if(firstdate > enddate){       
        enddate = enddate + arr[endmonth - 1];
                            
        endmonth = endmonth - 1;
            
      }
      if(firstmonth > endmonth){                
        endmonth = endmonth + 12;             
        endyear = endyear - 1;               
      }
      var d = enddate - firstdate;  
                                     
      var m = endmonth - firstmonth;
      var y = endyear - firstyear;
    
      document.getElementById('result').innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`;
    
  
}
}
