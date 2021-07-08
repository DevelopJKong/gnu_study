const main = document.querySelector(".main");
const content = main.querySelector("h1");


const mouseOverEvent = content.addEventListener("mouseover",function(){
    content.innerText = "Your mouse is here";
    content.style.color = "blue";
});

const mouseOutEvent = content.addEventListener("mouseout",function(){
    content.innerText = "Your mouse is gone";
    content.style.color = "red";
});

const resizeEvent = window.addEventListener("resize",function(){
    content.innerText = "you just resized";
    content.style.color = "purple";
});

const contextMenuEvent = window.addEventListener("contextmenu",function(){
    content.innerText = "That was a right click!";
    content.style.color = "orange";
});

