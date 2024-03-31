let info = document.getElementById("info");
const myButton = document.getElementById("myButton");
const label = document.getElementById("label1");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function() {
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;

  info.style["display"] = "none";

  console.log(randomNum);

}
