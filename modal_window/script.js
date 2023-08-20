'use strict';

// assigning elements to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// create a function to be used in multiple event listeners that removes the hidden classes on the modals and overlay
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// create one function to be used in multiple event listeners that hides the modal when the overlay is clicked or the x button
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// a loop to add and event listener to every show modal button
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// when clicking the close button
btnCloseModal.addEventListener('click', closeModal);

// when clicking ther overlay
overlay.addEventListener('click', closeModal);
