//UI selectors to keep track of score on the page
const playerCount = document.querySelector('#pcount');
const cpuCount = document.querySelector('#ccount');

const arrayOptions = ['red', 'blu', 'grn']; 

//Initialize choices
let playerChoice = null;
let cpuChoice = null;

//Initialize scores
let pcount = 0;
let ccount = 0;

//Creates a random choice by the cpu
function computerPlay() {
  //generate whole number 0 - 2 range to match with arrayOption index
  let cpuChoice = Math.floor(Math.random() * 3);
  return arrayOptions[cpuChoice];
}

//Rock paper scissors logic 
function play(playerChoice, cpuChoice) {
  //randomize CPU choice when player makes a selection
  cpuChoice = computerPlay();

  // Fire beats grass
  if (playerChoice === 'red' && cpuChoice === 'grn') {
    alert("Player win");
    pcount++;
    //Change value in html to reflect score
    playerCount.innerText = pcount;
  }
     
  //Water beats fire
  else if (playerChoice === 'blu' && cpuChoice == 'red') {
    alert("Player win");
    pcount++;
    playerCount.innerText = pcount;
  }
  //Grass beats water
  else if (playerChoice === 'grn' && cpuChoice === 'blu') {
    alert("Player win");
    pcount++;
    playerCount.innerText = pcount;
  }
  //Elements cancel out
  else if (playerChoice === cpuChoice) {
    alert("Tie");
  }
  //Will account for any case where cpu chooses a winning type
  else {
    alert("CPU win");
    ccount++;
    cpuCount.innerText = ccount;
  }
  //Resets the scores if either player reaches 5
  if (ccount === 5 || pcount === 5) {
    alert(`Player final score: ${pcount}\n CPU final score: ${ccount}`);
    ccount = 0;
    pcount = 0;
    cpuCount.innerText = ccount;
    playerCount.innerText = pcount;
  }
}

//Records the player's choice on click and runs play()
function playerPlay(e) {
  //if user clicks card or elements inside of the card
  if(e.target.parentElement.classList.contains('red')
    || e.target.classList.contains('red')) {
    playerChoice = 'red';
    play(playerChoice,cpuChoice);
  }
  else if(e.target.parentElement.classList.contains('blu')
    || e.target.classList.contains('blu')) {
    playerChoice = 'blu';
    play(playerChoice,cpuChoice);
  }
  else if(e.target.parentElement.classList.contains('grn')
    || e.target.classList.contains('grn')) {
    playerChoice = 'grn';
    play(playerChoice,cpuChoice);
  }
}

//Waits for click on the body
document.body.addEventListener('click',playerPlay);


