function playRound(playerSelection, computerSelection) {
  let outcomeMsg = ``;
  let outcome = ``;
  switch (playerSelection) {
    case "Rock":
      if (computerSelection == "Rock") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
      } else if (computerSelection == "Paper") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
      }
      break;
    case "Paper":
      if (computerSelection == "Paper") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
      } else if (computerSelection == "Scissors") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
      }
      break;
    case "Scissors":
      if (computerSelection == "Scissors") {
        outcomeMsg = `Draw! ${playerSelection} ties with ${computerSelection}`;
      } else if (computerSelection == "Rock") {
        outcomeMsg = `You lose! ${playerSelection} loses to ${computerSelection}`;
      } else {
        outcomeMsg = `You win! ${playerSelection} beats ${computerSelection}`;
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
    console.log(`Invalid selection. Please enter "Rock" "Paper" or "Scissors"`);
  }
}

function capitalize(word) {
  newWord = word.toLowerCase();
  newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1, newWord.length);
  return newWord;
}
