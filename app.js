var activePlayersID = 0;

function btnClickNew() {
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("btnRoll").disabled = false;
  document.getElementById("btnHold").disabled = false;
  document.getElementById("name-" + activePlayersID).textContent =
    "PLAYER " + (activePlayersID + 1);
}

function btnClickRoll(ID) {
  Roll(activePlayersID);
}

function Roll(ID) {
  var i = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dicePic").src = "dice-" + i + ".png";
  if (i > 1) {
    document.getElementById("score-" + ID).textContent =
      Number(document.getElementById("score-" + ID).textContent) + i;
  } else {
    document.getElementById("score-" + ID).textContent = 0;
    changeActiveStatus();
  }
}

function btnClickHold() {
  Hold(activePlayersID);
}

function Hold(ID) {
  document.getElementById("current-" + ID).textContent =
    Number(document.getElementById("current-" + ID).textContent) +
    Number(document.getElementById("score-" + ID).textContent);
  if (Number(document.getElementById("current-" + ID).textContent) >= 100) {
    document.getElementById("name-" + ID).textContent = "WINNER!";
    document.getElementById("btnRoll").disabled = true;
    document.getElementById("btnHold").disabled = true;
  } else changeActiveStatus();
}

function changeActiveStatus() {
  document.getElementById("score-" + activePlayersID).textContent = 0;
  document
    .getElementById("player" + activePlayersID)
    .classList.remove("active");
  activePlayersID == 1 ? (activePlayersID = 0) : (activePlayersID = 1);
  document.getElementById("player" + activePlayersID).classList.add("active");
}
