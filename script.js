document.addEventListener('DOMContentLoaded', showTime(),false);



function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    var month = date.toLocaleString('en-us', { month: 'long' })
    var weekday = date.toLocaleString('en-us', { weekday: 'long' })
    var day = date.toLocaleString('en-us', {  day: 'numeric' })

   session = h>= 12 ? 'PM' : 'AM';
  
   if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
    }
    if(h >= 12 && m > 00){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
   var time = h + ":" + m + session;
   var monthday= month+ " "+ day; 
   document.getElementById("time").innerText = time;
   document.getElementById("weekday").innerText = weekday;
   document.getElementById("month").innerText = monthday;  
    setTimeout(showTime, 1000);
    
}




