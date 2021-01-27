'use strict';

//Stops game from running
let playing = true;
let count = 0;

//Initial value
const value = document.querySelector('.guess');
const zero = (document.querySelector('.guess').value = 0);
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

// Allows check button to function
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let guess = count;
    console.log(guess);
    // Button functionality
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      count--;
    } else if (style.contains('increase')) {
      count++;
    } else if (style.contains('again')) {
      count = 0;
      secretNumber = randomNumber();

      restoreNumber('20');

      const restart = (document.querySelector('.number').textContent = '?');

      document.querySelector('.number').style.width = '15rem';

      displayMessage('Start guessing...');

      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.guess').textContent = count;

      document.querySelector('.highscore').textContent = highScore;

      score = 20;
    } else if (style.contains('check')) {
      score--;
      if (!guess) {
        displayMessage('🤬 There is no number!');
      } else if (guess <= 0 || guess >= 20) {
        if (guess) {
          displayMessage('Try again');
        }
        displayMessage(
          'This number is not valid, Please stay between 0 to 20.'
        );
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
        playing = false;
        // Results when answer is highier or lower than the Secret Number
      } else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(
            guess > secretNumber
              ? '⬆️ Guess was to high try again'
              : '⬇️ Guess was too low'
          );
          restoreNumber(score);
        }

        //Once all attemps reaches 0, player have lost the game
        else {
          displayMessage('💢 You lost game!');
          restoreNumber(0);
          playing = false;
        }
      }

      //Verify if no number was added to box or if numbers are not between 1-20
    }
    value.textContent = count;
  });
});
