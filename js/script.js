'use strict';

//Generates Random number from 1 to 20
let randomNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = randomNumber();

// Keeps track of total attemps
let score = 20;
let highScore = 0;

//Displaying message in game
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Changes number variable
const restoreNumber = function (value) {
  document.querySelector('.score').textContent = value;
};

//Random number generator

// Allows check button to function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Allows to restart the game
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = randomNumber();

    restoreNumber('20');

    const restart = (document.querySelector('.number').textContent = '?');

    document.querySelector('.number').style.width = '15rem';

    displayMessage('Start guessing...');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ' ';

    document.querySelector('.highscore').textContent = highScore;
  });

  //Verify if no number was added to box
  if (!guess) {
    displayMessage('🤬 There is no number!');
  }
  //Results when answer matches the Secret Number
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Results when answer is highier or lower than the Secret Number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '⬆️ Guess was to high try again'
          : '⬇️ Guess was too low'
      );
      score--;
      restoreNumber(score);
    }

    //Once all attemps reaches 0, player have lost the game
    else {
      displayMessage('💢 You lost game!');
      restoreNumber(0);
    }
  }
});
