'use strict';

// document.querySelector('.guess').value = 23;
//Generates Random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Keeps track of total attemps
let score = 20;

//Allow to view the Secret Number on scree
// document.querySelector('.number').textContent = secretNumber;

// Allows check button to function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //Allows to restart the game
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = '20';

    const restart = (document.querySelector('.number').textContent = '?');

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.guess').value = ' ';
  });

  //Verify if no number was added to box
  if (!guess) {
    document.querySelector('.message').textContent = '🤬 There is no number!';
  }
  //Results when answer matches the Secret Number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;
  }
  // Results when answer is highier than the Secret Number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '⬆️ Guess was to high try again';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //Once all attemps reaches 0, player have lost the game
    else {
      document.querySelector('.message').textContent = '💢 You lost game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //Represents what happens when answer is lower than the secret number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Guess was too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢 You lost game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
