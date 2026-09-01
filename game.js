//Christian Ruby RoShamBo the game

//variables
let humanScore = 0;
let botScore = 0;

for (let roundNum = 0; roundNum < 3; roundNum++) {
  console.log(`--- Round ${roundNum + 1} ---`);
  playRound();
}

announceWinner();

function getComputerChoice() {
  let botChoice = Math.floor(Math.random() * 3);
  console.log("Bot picks: " + botChoice);
  return botChoice;
}

function getHumanChoice() {
  let humanChoice = Number(prompt("Pick a num 0-2"));
  console.log("Human picks: " + humanChoice);
  return humanChoice;
}

function playRound() {
  
  let humanSelection = getHumanChoice();
  let botSelection = getComputerChoice();
  
  const result = (humanSelection - botSelection + 3) % 3;

  if (result === 0) {
    console.log("Tie");
  } else if (result === 1) {
    console.log("Human Wins the round");
    humanScore++;
  } else {
    console.log("Human Loses the round");
    botScore++; 
  }
  
  console.log(`Current Score -> Human: ${humanScore} | Bot: ${botScore}\n`);
}

function announceWinner() {
  console.log("--- FINAL RESULT ---");
  if (humanScore > botScore) {
    console.log("Human wins the game!");
  } else if (botScore > humanScore) {
    console.log("Bot wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}