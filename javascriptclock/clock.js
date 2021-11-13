let name1 = document.querySelector("#myName")


name2 = prompt("Adınız Nedir?")

name1.innerHTML = name2

function showTime() {
    const myClock = document.querySelector("#myClock");
    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;
  
    myClock.innerHTML = hour + ":" + min + ":" + sec;
    
  
    setTimeout(showTime, 1000);
  }
  
  showTime();


