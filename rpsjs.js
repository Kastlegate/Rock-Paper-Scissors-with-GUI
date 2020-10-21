// variables for the game
let header = document.getElementById("header");
let roundStatus = document.getElementById("roundStatus");
let scoreBoard = document.getElementById("scoreBoard");
let playerScore = 0;
let computerScore = 0;

// Creating mouse click listeners for the buttons
document.getElementById("rock").addEventListener("click", rockMouseDown);
document.getElementById("paper").addEventListener("click", paperMouseDown);
document.getElementById("scissors").addEventListener("click", scissorsMouseDown);

// creating audio variables
const winRoundAudio = new Audio('sounds/wonRound.mp3');
const lostRoundAudio = new Audio('sounds/lostRound.mp3');
const wonGameAudio = new Audio('sounds/wonGame.mp3');
const lostGameAudio = new Audio('sounds/lostGame.mp3');
const tieAudio = new Audio('sounds/tie.mp3');

// Function to get a random number between 1 and 3 for the computer's choice
function computerPlay(){
  var computerChoice = "";
  var random = Math.floor(Math.random() * 3) + 1;
  
  if(random == 1){
    computerChoice = "Rock";
  } 
  else if(random == 2){
    computerChoice = "Paper";
  }
  else{
    computerChoice = "Scissors";
  }
  return computerChoice;
}

  
// functions for the players button clicks
function rockMouseDown(){
  const choice = "rock";
  playGame(choice);
  scoreUpdater()
}

function paperMouseDown(){
  const choice = "paper";
  playGame(choice);
  scoreUpdater()
}

function scissorsMouseDown(){
  const choice = "scissors";
  playGame(choice);
  scoreUpdater()
}

// function to stop the audio on repeated button clicks
function stop(){
  winRoundAudio.pause();
  lostRoundAudio.pause();
  tieAudio.pause();
  wonGameAudio.pause();
  lostGameAudio.pause();
  lostGameAudio.pause();
  winRoundAudio.currentTime = 0;
  lostRoundAudio.currentTime = 0;
  tieAudio.currentTime = 0;
  wonGameAudio.currentTime = 0;
  lostGameAudio.currentTime = 0;
  lostGameAudio.currentTime = 0;
}

//functions for each rounds winner and games winner

function winRound(){
  stop();
  //increases the players score
  playerScore++
  winRoundAudio.play();
  roundStatus.textContent = "You won this round. :(";
}

function lostRound(){
  stop();
 //increases the computers score
  computerScore++
  lostRoundAudio.play();
  roundStatus.textContent = "You lost this round. :D";
}

function tieRound(){
  stop();
  tieAudio.play();
  roundStatus.textContent = "We tied this round. Bummer :|";
}

function wonGame(){ 
  stop();
  wonGameAudio.play();
  roundStatus.textContent = "GAME OVER MAN! GAME OVER!";
  header.textContent = "You Won This Time. Press An Icon Below to Play Again, You Swine!"
  playerScore = 0;
  computerScore = 0;
}

function lostGame(){
  stop();
  lostGameAudio.play();
  roundStatus.textContent = "YOU SHALL NEVER BEAT ME! AHAHA!";
  header.textContent = "Press An Icon Below to Play Again, Sucker!"
  playerScore = 0;
  computerScore = 0;
}

// function to update the score board
function scoreUpdater(){
  scoreBoard.textContent = "You: " + playerScore + " Me: " + computerScore;
}

// Function to play a round of Rock Paper Scissors
function playGame(playerChoice){
  
    let player = playerChoice;
    let computer = computerPlay();
    
    //Computer chooses Rock
    if(player == "rock" && computer == "Rock"){
      tieRound();
    }
    else if(player == "paper" && computer == "Rock"){
      winRound()
    }
    else if(player == "scissors" && computer == "Rock"){
      lostRound()
    }

    //Computer chooses Paper
    else if(player == "rock" && computer == "Paper"){
      lostRound()
    }
    else if(player == "paper" && computer == "Paper"){
      tieRound();
    }
    else if(player == "scissors" && computer == "Paper"){
      winRound()
    }

    //Computer chooses Scissors
    else if(player == "rock" && computer == "Scissors"){
      winRound()
    }
    else if(player == "paper" && computer == "Scissors"){
      lostRound()
    }
    else if(player == "scissors" && computer == "Scissors"){
      tieRound();
    }
    else{
    console.log("Broken")
    }
    //console.log(player + " " + computer)

  if(playerScore == 5){
    wonGame()
    scoreUpdater();
  }
  else if(computerScore == 5){
    lostGame()
    scoreUpdater();
  }

  else{
    scoreUpdater();
  } 
      
}