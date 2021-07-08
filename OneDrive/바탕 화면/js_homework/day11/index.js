const clockTitle = document.querySelector(".js-clock");
function handlerClockTime() {
  const christmas = new Date("2021-12-24:23:59:59+0900");
  const today = new Date();


  const todayMonth = today.getMonth();
  const todayDay = today.getDay();
  const todayHour = today.getHours();
  const todayMinute = today.getMinutes();
  const todaySecond = today.getSeconds();


  const chrMonth = christmas.getMonth();
  const chrDay = christmas.getDay();
  const chrHour = christmas.getHours();
  const chrMinute = christmas.getMinutes();
  const chrSecond = christmas.getSeconds();

  clockTitle.innerText =
    `${
        (chrMonth - todayMonth) * 30 + (chrDay - todayDay) < 10
        ? `0${(chrMonth - todayMonth) * 30 + (chrDay - todayDay)}d `
        : (chrMonth - todayMonth) * 30 + (chrDay - todayDay)+"d "
        
    }` +
    
    
    `${
      chrHour - todayHour < 10
        ? `0${chrHour - todayHour}h`
        : chrHour - todayHour + "h"
    } ${
      chrMinute - todayMinute < 10
        ? `0${chrMinute - todayMinute}m`
        : chrMinute - todayMinute + "m"
    } ${
      chrSecond - todaySecond < 10
        ? `0${chrSecond - todaySecond}s`
        : chrSecond - todaySecond + "s"
    }`;
}
function init() {
  handlerClockTime();
  setInterval(handlerClockTime, 1000);
}

init();

//노마드 코더 solution

// const clockTitle = document.querySelector(".js-clock");
// 
// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//   const now = new Date();
//   // This is in milisecondsx
//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }
// 
// getTime();
// setInterval(getTime, 1000);
