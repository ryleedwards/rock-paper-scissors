const btnsPlayer = document.querySelectorAll(".btn.player");
const btnsCpu = document.querySelectorAll(".btn.cpu");
const result = document.querySelector(".result");

let playerScore = 0,
  computerScore = 0,
  roundDisplay = 0;

btnsPlayer.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.classList[1];
    playRound(playerSelection, computerPlay());
  });
});

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
