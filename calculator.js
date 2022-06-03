function age() {
  var firstdate = document.getElementById('date').value;
  var firstmonth = document.getElementById('month').value;
  var firstyear = document.getElementById('year').value;

  var date = new Date();
  var enddate = date.getDate();
  //console.log(date);
  var endmonth= 1+date.getMonth();
  //console.log(m2);
  var endyear = date.getFullYear();
  var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                                  // 5 11 1999   to 3 6 2022
  if(firstdate > enddate){       //  5>3
    enddate = enddate + arr[endmonth - 1];
                        // d2=3+30=33
    endmonth = endmonth - 1;
    //console.log(m2);      // m2=5
  }
  if(firstmonth > endmonth){                 // 11>5
    endmonth = endmonth + 12;              // 17
    endyear = endyear - 1;                // 2021
  }
  var d = enddate - firstdate;  
    //console.log(d1);                               // 33-3
  var m = endmonth - firstmonth;
  var y = endyear - firstyear;

  document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}
