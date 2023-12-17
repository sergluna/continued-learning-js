'use strict';

// Selecting the elements that show scores and the dice
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// letting the variables 'live' outstide init funcion
let scores, currentScore, activePlayer, playing;

const init = function () {
  // assining the init varables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); // Selecting the dice variable and adding the hidden css rule
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// initializing game
init();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Adding event listener to roll button
rollBtn.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check is rolled dice is 1,
    if (dice !== 1) {
      // Add dice rol to score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch players, if its 0 it switches to 1 if not its zero
      switchPlayer();
    }
  }
});

// holding score

holdBtn.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check to see if score is >= 100
    if (scores[activePlayer] >= 100) {
      // finish game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init);
