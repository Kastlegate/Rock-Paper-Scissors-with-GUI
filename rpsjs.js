// variables for the game
let header = document.getElementById("header");
let roundStatus = document.getElementById("roundStatus");
let scoreBoard = document.getElementById("scoreBoard");
let playerScore = 0;
let computerScore = 0;
let rockClass = document.getElementById("rock");
let paperClass = document.getElementById("paper");
let scissorsClass = document.getElementById("scissors");

// Creating mouse click listeners for the buttons
//document.getElementById("rock").addEventListener("click", rockMouseDown);
rockClass.addEventListener("click", rockMouseDown);
paperClass.addEventListener("click", paperMouseDown);
scissorsClass.addEventListener("click", scissorsMouseDown);

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
  rockClass.classList.add('playerColor');
  playGame(choice);
  scoreUpdater()
}

function paperMouseDown(){
  const choice = "paper";
  paperClass.classList.add('playerColor');
  playGame(choice);
  scoreUpdater()
}

function scissorsMouseDown(){
  const choice = "scissors";
  scissorsClass.classList.add('playerColor');
  playGame(choice);
  scoreUpdater()
}

function removeTransition(e){
  //skips it if it's not a transform
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playerColor', 'computerColor', 'tieColor', 'gameWonColor1', 'gameWonColor2', 'gameWonColor3');

  console.log(e.propertyName);
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

//functions for each rounds winner, and each games winner

function winRound(){
  stop();
  //increases the players score
  playerScore++
  // calls the play function to start playing the various audio files
  winRoundAudio.play();
  //give the winner of each round
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
  rockClass.classList.add('gameWonColor1');
  paperClass.classList.add('gameWonColor2');
  scissorsClass.classList.add('gameWonColor3');
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
      rockClass.classList.add('tieColor');
    }
    else if(player == "paper" && computer == "Rock"){
      winRound()
      rockClass.classList.add('computerColor');
    }
    else if(player == "scissors" && computer == "Rock"){
      lostRound()
      rockClass.classList.add('computerColor');
    }

    //Computer chooses Paper
    else if(player == "rock" && computer == "Paper"){
      lostRound()
      paperClass.classList.add('computerColor');
    }
    else if(player == "paper" && computer == "Paper"){
      tieRound();
      paperClass.classList.add('tieColor');
    }
    else if(player == "scissors" && computer == "Paper"){
      winRound()
      paperClass.classList.add('computerColor');
    }

    //Computer chooses Scissors
    else if(player == "rock" && computer == "Scissors"){
      winRound()
      scissorsClass.classList.add('computerColor');
    }
    else if(player == "paper" && computer == "Scissors"){
      lostRound()
      scissorsClass.classList.add('computerColor');
    }
    else if(player == "scissors" && computer == "Scissors"){
      tieRound();
      scissorsClass.classList.add('tieColor');
    }
    else{
    console.log("Broken")
    }
    
  // if statement to declare whoever gets to 5 points first the winner
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


  

  rockClass.addEventListener("transitionend", removeTransition);
  paperClass.addEventListener("transitionend", removeTransition);
  scissorsClass.addEventListener("transitionend", removeTransition);
      
}