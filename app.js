const btns = document.querySelectorAll(".btn");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.classList[1];
    outcome = playRound(playerSelection, computerPlay());
    console.log(outcome[1]);
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
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        outcome = 1;
      }
      break;
    case "paper":
      if (computerSelection == "paper") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "scissors") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        outcome = -1;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        outcome = 1;
      }
      break;
    case "scissors":
      if (computerSelection == "scissors") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "rock") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        outcome = -1;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        outcome = 1;
      }
      break;
  }
  return [outcome, outcomeMsg];
}

function computerPlay() {
  let selection = ``;
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      selection = "rock";
      break;
    case 1:
      selection = "paper";
      break;
    case 2:
      selection = "scissors";
      break;
  }
  return selection;
}

// playerPlay no longer needed - handled by button press event listener

// function playerPlay(playerSelection) {
//   if (
//     playerSelection == "rock" ||
//     playerSelection == "paper" ||
//     playerSelection == "scissors"
//   ) {
//     return playerSelection;
//   } else {
//     /* TODO need to fix logic here to escape playerPlay function and throw error.
//       Possibly preserve game state / score. . . */
//     console.log(`Invalid selection. Please enter "Rock" "Paper" or "Scissors"`);
//   }
// }

function capitalize(word) {
  newWord = word.toLowerCase();
  newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1, newWord.length);
  return newWord;
}

function game() {
  let playerScore = 0,
    computerScore = 0,
    roundDisplay = 0;

  // changing to 1 round

  for (let i = 0; i < 1; i++) {
    round = playRound(playerPlay(), computerPlay());
    console.log(round[1]);
    /* player win round */
    if (round[0] > 0) {
      playerScore++;
    } else if (round[0] < 0) {
      /* computer win round */
      computerScore++;
    }
    roundDisplay = i + 1;
    console.log(
      `Round ${roundDisplay} : Player Score: ${playerScore}    ||    Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("You win! Congratulations!");
  } else if (playerScore < computerScore) {
    console.log("You lose! Better luck next time!");
  } else {
    console.log("Draw! Please try again.");
  }
}
