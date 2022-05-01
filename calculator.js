function age(){
    let firstdate=document.getElementById("date").value;
    let firstmonth=document.getElementById("month").value;
    let firstyear=document.getElementById('year').value;
    let data = new Date();
    let endDate=data.getDate();
    let endMonth=1+data.getMonth();
    let endYear=data.getFullYear();
    let arr=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(firstmonth > endMonth ){
      
      endMonth = endMonth+11;
      endYear = endYear-1;
      
    }
    if(firstdate>endDate){  //  05 01
      var date=arr[endDate-1]-firstdate
    }else{
    
    var date=endDate-firstdate;
    }
    let month=endMonth-firstmonth;
    let year=endYear-firstyear;
    
    
    document.getElementById('result').innerHTML = `${year}years ${month} Months ${date}days `;
    
  }