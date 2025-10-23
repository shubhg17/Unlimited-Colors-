
const body = document.querySelector("body");

//generate a random color
const randomColor = function() {
   const hex = "0123456789ABCDEF"
   let color = "#"
   for(let i=0; i<6; i++) {
      color+=hex[Math.floor(Math.random()*16)]
   }
   return color;
}

const a = function() {
  body.style.backgroundColor = randomColor()
}

let intervalId = null;

document.querySelector("#start").addEventListener("click" , function() {
   if(!intervalId) {
      intervalId = setInterval(a , 1000);
      console.log("STARTED")
   }
})

document.getElementById("stop").addEventListener("click" , function() {
  if(intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      console.log("STOPPED")
  }
})