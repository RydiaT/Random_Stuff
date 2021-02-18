let RANDOM_NUMBER = 0;
let randnum = () => {
  RANDOM_NUMBER = Math.floor(Math.random() * 101);
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
  else if (playerChoice === RANDOM_NUMBER) {
    message = correct();
  }
  return message;
};
let correct = () => {
  return "Congrats! You got it!"
};

