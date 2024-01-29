var second = 0;
var minute = 0;
var hour  = 0;
var d = new Date();

setInterval(
  
  
  function(){
    d= new Date();
    seconds = d.getSeconds();
    minutes = d.getMinutes();
    hours = d.getHours();
    second = d.getSeconds()*6;
    minute = d.getMinutes()* 6;
  
    hour = d.getHours()*30+ Math.round(minute/12);
    
    
    
    document.getElementById("second-hand").style.transform="rotate(" +second + "deg)";
    document.getElementById("minute-hand").style.transform="rotate(" +minute + "deg)";
    
    document.getElementById("hour-hand").style.transform="rotate(" +hour + "deg)";
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("hours").innerHTML = hours;
    
    let f_h = document.getElementById('f_hours');
    let f_m = document.getElementById('f_min');

    if(hours>=12)
    {
      hours = hours-12;
    }
    else{
      console.log("error")
    }
    let f_s = document.getElementById('f_sec');
      f_h.innerHTML =  hours;
      f_m.innerHTML =  ': '+minutes;
      f_s.innerHTML = ': '+ seconds;


    

    var hour_ele = document.getElementsByClassName('hourd');
    for (i = 0; i < hour_ele.length; i++) {
      hour_ele[i].innerHTML = hours;
    }

    var min_ele = document.getElementsByClassName('mind');
    for (i = 0; i < hour_ele.length; i++) {
      min_ele[i].innerHTML = minutes;
    }

    

    var elements = document.getElementsByClassName('secondss');

  
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = seconds ;
  }
    
  
  
    
  },500
  
  
  
  );
