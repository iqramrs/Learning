// input maximum number
let maximum = parseInt(prompt("Enter your maximum number : "));
while (!maximum) {
  maximum = parseInt(prompt("Enter your maximum number : "));
}

// generate random number between 1 and maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your guess : "));

// Main game loop
while (guess !== targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high, guess again : "));
  } else {
    guess = parseInt(prompt("Too low, guess again : "));
  }

  // Handle invalid input
  while (isNaN(guess) || guess <= 0) {
        guess = parseInt(prompt('Please enter a valid number : '));
    }
}

alert("congratulations you guessed it");
