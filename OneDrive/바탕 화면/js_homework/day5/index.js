const html = document.querySelector("html");
const currentWindow = window.innerWidth;
const resizeEvent = window.addEventListener("resize",function(){

    if(currentWindow >= window.innerWidth + 70 ){
        html.style.backgroundColor = "blue";
    } else if( currentWindow <=  window.innerWidth - 70) {
        html.style.backgroundColor = "darkred";
    } else {
        html.style.backgroundColor= "cornflowerblue";
    }
});