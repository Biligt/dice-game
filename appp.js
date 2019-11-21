var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var dice = Math.floor(Math.random() * 6 + 1);
window.document.querySelector("#score-0").textContent = dice;
document.querySelector(".dice").style.display = "none";
