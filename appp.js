var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var diceNumber = Math.floor(Math.random() * 6 + 1);
window.document.querySelector("#score-0").textContent = dice;
document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function() {
  roundScore = +diceNumber;
  document.querySelector(".dice").style.display = "block";
  document.querySelector(".dice").src = "dice-" + diceNumber;
  // console.log(Math.floor(Math.random() * 6 + 1));
});
