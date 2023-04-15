const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const bodyBackground = document.querySelector("body");
let timerId = null;

btnStart.addEventListener('click',onStart);
btnStop.addEventListener('click', onStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function onStart(){
btnStart.disabled = true
btnStop.disabled = false
   timerId = setInterval(()=> {
bodyBackground.style.backgroundColor = getRandomHexColor();
    },1000)
}  
function onStop(){
    clearInterval(timerId)
    btnStart.disabled = false;
    btnStop.disabled = true
}