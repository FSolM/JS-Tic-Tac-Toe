/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { gameController } from './lib/gameController.js';

const eventFunction = (cell, index) => {
  playerMove(cell, index);
};

function playerMove (node, index) {
  if (!node.hasChildNodes()) {
    const currentPlayer = gameController.getCurrentPlayer();
    node.innerHTML = `<span class="board-game-cell-value">${currentPlayer.getToken()}</span>`;
    gameController.gameBoard[index] = currentPlayer.getToken();
    if (gameController.gameStatus()) {
      alert(`${currentPlayer.getName()} Won!`);
      deleteEventListeners();
    }
    gameController.setCurrentPlayer();
  }
}

function createEventListeners () {
  const cells = document.getElementsByClassName('board-game-cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', eventFunction(cells[i], i));
  }
}

function deleteEventListeners () {
  const cells = document.getElementsByClassName('board-game-cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].removeEventListener('click', eventFunction(cells[i], i));
  }
}

document.getElementById('input-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const nameP1 = document.getElementById('player1').value;
  const nameP2 = document.getElementById('player2').value;
  gameController.setup(nameP1, nameP2);
  createEventListeners();
});
