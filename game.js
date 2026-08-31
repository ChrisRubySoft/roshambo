//Christian Ruby RoShamBo the game

function getComputerChoice(){

let botChoice = Math.floor(Math.random() * 3);
//returns an integer number
console.log("Bot picks: " + botChoice)
return botChoice;
}

function getHumanChoice() {
  let humanChoice = Number(prompt("Pick a num 0-2"));
  console.log("Human picks: " + humanChoice)
  return humanChoice;
}
let humanSelection = getHumanChoice();
let botSelection = getComputerChoice();

//let humanScore = 0;
//let botScore = 0;
//let gameStart = false;
//let gameOver = false;
//let gameWon = false;
//let gameLoss = false;
//let roundStart = false;
//let roundAmount = playerChoice

function round(){
const result = (humanSelection - botSelection + 3) % 3;

if (result === 0) {
  console.log("Tie");
} else if (result ===1){
  console.log("Human Wins");
  humanScore = humanScore + 1;
} else {
  console.log("Human Loses");
  botScore = botScore + 1;
}
}

round();
//while (gameStart == true) {
  
//}