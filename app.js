game();

function playRound(playerSelection, computerSelection) {
  let outcomeMsg = ``;
  let outcome = ``;
  switch (playerSelection) {
    case "Rock":
      if (computerSelection == "Rock") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "Paper") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        outcome = -1;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        outcome = 1;
      }
      break;
    case "Paper":
      if (computerSelection == "Paper") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "Scissors") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
        outcome = -1;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
        outcome = 1;
      }
      break;
    case "Scissors":
      if (computerSelection == "Scissors") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
        outcome = 0;
      } else if (computerSelection == "Rock") {
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
      selection = "Rock";
      break;
    case 1:
      selection = "Paper";
      break;
    case 2:
      selection = "Scissors";
      break;
  }
  return selection;
}

function playerPlay() {
  let playerSelection = prompt(
    "Please select Rock, Paper, or Scissors",
    ""
  ).trim();
  playerSelection = capitalize(playerSelection);
  if (
    playerSelection == "Rock" ||
    playerSelection == "Paper" ||
    playerSelection == "Scissors"
  ) {
    return playerSelection;
  } else {
    /* TODO need to fix logic here to escape playerPlay function and throw error. 
      Possibly preserve game state / score. . . */
    console.log(`Invalid selection. Please enter "Rock" "Paper" or "Scissors"`);
  }
}

function capitalize(word) {
  newWord = word.toLowerCase();
  newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1, newWord.length);
  return newWord;
}

function game() {
  let playerScore = 0,
    computerScore = 0,
    roundDisplay = 0;

  for (let i = 0; i < 5; i++) {
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
