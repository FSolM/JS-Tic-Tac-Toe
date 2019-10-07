/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { gameController } from './lib/gameController.js';

/*
(() => gameController)();
(()=>{

    let tictactoe = true;

    while(tictactoe){
        // gc.setup
        gameController.setup();
        // gc.match
        // gc.finish
    }
})();
*/

function playerMove (node, index) {
  if (!node.hasChildNodes()) {
    const currentPlayer = gameController.getCurrentPlayer();
    node.innerHTML = `<span class="board-game-cell-value">${currentPlayer.getToken()}</span>`;
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

document.getElementById('input-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const nameP1 = document.getElementById('player1').value;
  const nameP2 = document.getElementById('player2').value;
  gameController.setup(nameP1, nameP2);
  createEventListeners();
});
