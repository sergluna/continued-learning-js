'use strict';

// Selecting the elements that show scores and the dice
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;

// Selecting the dice variable and adding the hidden css rule
diceEl.classList.add('hidden');

// Adding event listener to roll button
rollBtn.addEventListener('click', function () {
  // Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // Check is rolled dice is 1,
  if (dice !== 1) {
    // Add dice rol to score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch players
  }
});
