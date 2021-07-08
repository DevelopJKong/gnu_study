const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const body = document.querySelector("body");
  const btn = body.querySelector("button");
 
 function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

let randomFrist = getRandomIntInclusive(0,colors.length); 
let randomSecond = getRandomIntInclusive(0,colors.length);

function handlerBtnClickEvent(){
  body.style.background = `linear-gradient(45deg,${colors[randomFrist]},${colors[randomSecond]})`;
  randomFrist =getRandomIntInclusive(0,colors.length);
  randomSecond =getRandomIntInclusive(0,colors.length); 

}

btn.addEventListener("click",handlerBtnClickEvent);