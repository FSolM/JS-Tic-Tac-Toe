/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { gameController } from './lib/gameController.js';

let nameP1 = '';
let nameP2 = '';

function playerMove (node, index) {
  if (!node.hasChildNodes()) {
    const currentPlayer = gameController.getCurrentPlayer();
    node.innerHTML = `<span class="board-game-cell-value">${currentPlayer.getToken()}</span>`;
    gameController.gameBoard[index] = currentPlayer.getToken();
    if (gameController.gameStatus()) {
      deleteEventListeners();
      document.getElementById('game-over').classList.remove('set-hidden');
      gameController.printWinner(currentPlayer.getName());
      alert('Game Over');
    }
    if (gameController.printTie()) {
      deleteEventListeners();
      document.getElementById('game-over').classList.remove('set-hidden');
      alert('Game Over');
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

document.getElementById('input-submit').addEventListener('click', (e) => {
  e.preventDefault();
  nameP1 = document.getElementById('player1').value;
  nameP2 = document.getElementById('player2').value;
  gameController.setup(nameP1, nameP2);
  createEventListeners();
});

document.getElementById('play-again-button').addEventListener('click', () => {
  gameController.setup(nameP1, nameP2);
  createEventListeners();
});
