let winConditionArr = {};
let cellArray = document.querySelectorAll(".cell");
let startBtn = document.getElementById("startBtn");

var myTurn = function chooseCell() {
  cellArray.forEach(function (element) {
    element.addEventListener("click", () => {
      console.log(element.getAttribute("data-cell"));
      return element.classList.add("redCell");
    });
  });
};

let opponentTurn = function opponentTurnFn() {
  function opponentChoose() {
    var randomCell = Math.floor(Math.random() * 10);
    return randomCell;
  }
  cellArray[opponentChoose()].style.backgroundColor = "blue";
};

function winCondition() {
  if (
    (cellArray[0].classList.contains("redCell") &&
      cellArray[1].classList.contains("redCell") &&
      cellArray[2].classList.contains("redCell")) ||
    (cellArray[2].classList.contains("redCell") &&
      cellArray[5].classList.contains("redCell") &&
      cellArray[8].classList.contains("redCell")) ||
    (cellArray[0].classList.contains("redCell") &&
      cellArray[3].classList.contains("redCell") &&
      cellArray[6].classList.contains("redCell"))
  ) {
    console.log("won!");
    let score = document.querySelector(".score");
    score.innerHTML = Number(score.innerHTML + 1);
  } else console.log("continue");
}

let startFn = function startGame() {
  let isMyTurn = true;
  let isOpponentTurn = false;
  if (isMyTurn) {
    myTurn;
    isMyTurn = false;
    isOpponentTurn = true;
  } else opponentTurn;
};
startBtn.addEventListener("click", startFn);
