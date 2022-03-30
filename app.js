const btnsPlayer = document.querySelectorAll(".btn.player");
const btnsCpu = document.querySelectorAll(".btn.cpu");
const btnReplay = document.querySelector(".btn.replay");
const result = document.querySelector(".result");
const pScoreDisplay = document.getElementById("playerScore");
const roundDisplay = document.getElementById("round");
const cpuScoreDisplay = document.getElementById("cpuScore");
const outcomeDisplay = document.querySelector(".outcome");

let playerScore = 0,
  computerScore = 0,
  round = 0;

refreshScore();

btnsPlayer.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.classList[1];
    playRound(playerSelection, computerPlay());
  });
});

btnReplay.addEventListener("click", () => {
  console.log("Replay Button Hit");
  replay();
});

function replay() {
  console.log("replay() hit");
  outcomeDisplay.style.visibility = "hidden";
  btnReplay.style.visibility = "hidden";
  playerScore = 0;
  computerScore = 0;
  round = 0;
  refreshScore();
}

function playRound(playerSelection, computerSelection) {
  let outcomeMsg = ``;
  let outcome = ``;
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "paper") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        outcome = -1;
        btnsPlayer[0].style.backgroundColor = "red";
        btnsPlayer[0].style.color = "white";
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        btnsPlayer[0].style.backgroundColor = "green";
        btnsPlayer[0].style.color = "white";
        outcome = 1;
      }
      break;
    case "paper":
      if (computerSelection == "paper") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "scissors") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        btnsPlayer[1].style.backgroundColor = "red";
        btnsPlayer[1].style.color = "white";
        outcome = -1;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        btnsPlayer[1].style.backgroundColor = "green";
        btnsPlayer[1].style.color = "white";
        outcome = 1;
      }
      break;
    case "scissors":
      if (computerSelection == "scissors") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "rock") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        btnsPlayer[2].style.backgroundColor = "red";
        btnsPlayer[2].style.color = "white";
        outcome = -1;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        outcome = 1;
        btnsPlayer[2].style.backgroundColor = "green";
        btnsPlayer[2].style.color = "white";
      }
      break;
  }
  result.textContent = outcomeMsg;
  incrementScore(outcome);
}

function deselectBtns() {
  btnsCpu.forEach((button) => {
    button.style.backgroundColor = "white";
  });
  btnsPlayer.forEach((button) => {
    button.style.backgroundColor = "white";
    button.style.color = "black";
  });
}

function computerPlay() {
  deselectBtns();
  let selection = ``;
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      selection = "rock";
      btnsCpu[0].style.backgroundColor = "Yellow";
      break;
    case 1:
      selection = "paper";
      btnsCpu[1].style.backgroundColor = "Yellow";
      break;
    case 2:
      selection = "scissors";
      btnsCpu[2].style.backgroundColor = "Yellow";
      break;
  }
  return selection;
}

function incrementScore(outcome) {
  switch (outcome) {
    case -1: //lose
      computerScore++;
      break;
    case 0: //draw
      break;
    case 1: //win
      playerScore++;
      break;
  }

  if (round < 5) {
    round++;
  } else {
    declareOutcome();
  }
  refreshScore();
}

function declareOutcome() {
  let declaredOutcome = "";
  if (playerScore > computerScore) {
    declaredOutcome = "You Win!";
  } else if (playerScore < computerScore) {
    declaredOutcome = "You Lose!";
  } else {
    declaredOutcome = "Draw!";
  }
  outcomeDisplay.style.visibility = "visible";
  btnReplay.style.visibility = "visible";
  outcomeDisplay.textContent = declaredOutcome;
}

function refreshScore() {
  pScoreDisplay.textContent = playerScore;
  roundDisplay.textContent = round;
  cpuScoreDisplay.textContent = computerScore;
}
