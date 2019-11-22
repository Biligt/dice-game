var activePlayer = 0;
var scores = [99, 0];
var roundScore = 0;
var isOver = true;

document.querySelector(".btn-new").addEventListener("click", function() {
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  isOver = false;
});

// window.document.querySelector("#score-0").textContent = dice;
var diceDOM = document.querySelector(".dice");

diceDOM.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (!isOver) {
    var diceNumber = Math.floor(Math.random() * 6 + 1); // get random number (1-6)
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + diceNumber + ".png";
    // console.log(Math.floor(Math.random() * 6 + 1));
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      roundScore = 0;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      switchPlayer();
      diceDOM.style.display = "none";
    }
  } else alert("Game is over! \nPress NEW GAME");
});

//HOLD
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (!isOver) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      isOver = true;
    } else switchPlayer();
    roundScore = 0;
  } else alert("Game is over! \nPress NEW GAME");
});

function switchPlayer() {
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  diceDOM.style.display = "none";
}
