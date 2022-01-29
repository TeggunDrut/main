const mainmenu = document.getElementById("ui-mainmenu");
const mainmenuBtnPlay = document.getElementById("mainmenuBtnPlay");
const mainmenuBtnOptions = document.getElementById("mainmenuBtnOptions");
const mainmenuBtnExit = document.getElementById("mainmenuBtnExit");
const gcanv = document.getElementById("galaxy");
const gctx = gcanv.getContext("2d");

let fadeDiv = document.getElementById("fadeDiv");
let div = document.createElement("div");

let particles = [];
let count = 70;
let speed = 4;

function getDistance(xA, yA, xB, yB) {
  var xDiff = xA - xB;
  var yDiff = yA - yB;

  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function fadeOut(seconds) {
  let alpha = 0;

  setInterval(() => {
    if (alpha < 1) {
      alpha += 0.01;
      div.setAttribute(
        "style",
        `width: 100%; height: 100%;background-color: rgba(0, 0, 0, ${alpha})`
      );
    }
  }, seconds * 10);
  fadeDiv.appendChild(div);
  return true;
}
