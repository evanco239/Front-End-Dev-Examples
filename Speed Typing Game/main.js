window.addEventListener("load", init);

// global variables

//available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// change level difficulty
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM element variables
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "in",
  "this",
  "project",
  "we",
  "will",
  "build",
  "a",
  "speed",
  "typing",
  "game",
  "in",
  "JavaScript",
  "even",
  "if",
  "you",
  "are",
  "a",
  "beginner",
  "in",
  "JavaScript",
  "and",
  "programming",
  "i",
  "would",
  "encourage",
  "you",
  "to",
  "follow",
  "along",
  "we",
  "are",
  "not",
  "using",
  "any",
  "frameworks",
  "or",
  "libraries"
];

// initialize game
function init() {
  //show number of seconds to win
  seconds.textContent = currentLevel;
  // load random word from array
  showWord(words);
  // check input to see if it matches
  wordInput.addEventListener("input", startMatch);
  //call countdown every second
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

//pick a random word
function showWord(words) {
  currentWord.textContent = words[Math.floor(Math.random() * words.length + 1)];
}

// countdown timer
function countdown() {
  timeDisplay.textContent = time;
  // check for timeout
  if (time > 0) {
    //decrease the time
    time--;
  } else if (time === 0) {
    //game is over.
    isPlaying = false;
  }
}
//see if the game is over or not
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.textContent = "Game Over!!";
    score = 0;
  }
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (scoreDisplay.textContent === -1) {
    scoreDisplay.textContent = 0;
  } else {
    scoreDisplay.textContent = score;
  }
}

//match current word to the input
function matchWords() {
  if (wordInput.value === currentWord.textContent) {
    message.textContent = "Correct";
    return true;
  } else {
    message.textContent = "";
    return false;
  }
}
