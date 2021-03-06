const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1"),
 clockDayTitle = clockContainer.querySelector(".js-day")


function getTime() {

 const date = new Date();
 const minutes = date.getMinutes();
 const hours = date.getHours();
 const seconds = date.getSeconds();
 const days = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
 
 clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds 
}`;
 clockDayTitle.innerText = `${days[date.getDay()]}`
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();

//2020.04.27 오후3시53분 커밋 확인을 위한 주석