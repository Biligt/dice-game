var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// window.document.querySelector("#score-0").textContent = dice;
var diceDOM = document.querySelector(".dice");

diceDOM.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6 + 1); // get random number (1-6)
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + diceNumber + ".png";
  // console.log(Math.floor(Math.random() * 6 + 1));
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");
    diceDOM.style.display = "none";
  }
});
