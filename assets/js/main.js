/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */

import { gameController } from './lib/gameController.js';

let nameP1 = '';
let nameP2 = '';

function playerMove (node, index) {
  if (!node.hasChildNodes()) {
    const currentPlayer = gameController.getCurrentPlayer();
    node.innerHTML = `<span class="board-game-cell-value">${currentPlayer.getToken()}</span>`;
    gameController.writeBoard(index, currentPlayer.getToken());
    if (gameController.gameStatus()) {
      deleteEventListeners();
      document.getElementById('game-over').classList.remove('set-hidden');
      gameController.printWinner(currentPlayer.getName());
      alert('Game Over');
      playAgain();
    }
    if (gameController.printTie()) {
      deleteEventListeners();
      document.getElementById('game-over').classList.remove('set-hidden');
      alert('Game Over');
      playAgain();
    }
    gameController.setCurrentPlayer();
  }
}

function createEventListeners () {
  const cells = document.getElementsByClassName('board-game-cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', () => {
      playerMove(cells[i], i);
    });
  }
}

function deleteEventListeners () {
  const cells = document.getElementsByClassName('board-game-cell');
  for (let i = 0; i < cells.length; i += 1) {
    const clone = cells[i].cloneNode(cells[i]);
    cells[i].parentNode.replaceChild(clone, cells[i]);
  }
}

function playAgain () {
  const btn = document.getElementById('play-again-button');
  btn.addEventListener('click', () => {
    gameController.initializeGameBoard();
    gameController.setup(nameP1, nameP2);
    createEventListeners();
  });
  btn.scrollIntoView();
}

document.getElementById('input-submit').addEventListener('click', (e) => {
  e.preventDefault();
  nameP1 = document.getElementById('player1').value;
  nameP2 = document.getElementById('player2').value;
  gameController.setup(nameP1, nameP2);
  createEventListeners();
});
