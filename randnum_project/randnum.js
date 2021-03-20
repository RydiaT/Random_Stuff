let RANDOM_NUMBER = 0;
let GAME_COUNTER = null;
let GUESS_ARRAY = [];
let AVERAGE = 0;
let randnum = () => {
  if(GAME_COUNTER === null) GAME_COUNTER = 0;
  else GAME_COUNTER++;
  let outputArea = document.getElementById("outputArea")
  outputArea.innerHTML = ""
  outputArea.append("Starting new game... \n")
  RANDOM_NUMBER = Math.floor(Math.random() * 101);
  GUESS_ARRAY[GAME_COUNTER] = 0;
};
let guessNum = (playerChoice) => {
  let message = "";
  if (typeof playerChoice != "number") {
    message = "Please input a number!"
  }
  else if (playerChoice < 1) {
    message = "Please input a number greater than 1 but less than 100!"
  }
  else if (playerChoice > 100) {
    message = "Please input a number greater than 1 but less than 100!"
  }
  else if (playerChoice < RANDOM_NUMBER) {
    message = "Higher!";
  }
  else if (playerChoice > RANDOM_NUMBER) {
    message = "Lower!";
    }
  GUESS_ARRAY[GAME_COUNTER]++;
  if (message === "") {
    message = correct();
  }
  return message;
};
let correct = () => {
  updateStatBar();
  return "Congrats! You got it!"
};
let updateStatBar = () => {
  let total = 0;
  let statBar = document.getElementById("totalGameStats");
  for(i = 0;i < GAME_COUNTER;i++){
  total +=  GUESS_ARRAY[i];
  }
  AVERAGE = total / GUESS_ARRAY.length
  statBar.innerHTML = AVERAGE
}