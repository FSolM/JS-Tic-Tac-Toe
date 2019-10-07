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

function playerMove (index) {
  // Check if cell empty
  // Check who's the current player
  // Write current player's symbol
}

function createEventListeners () {
  const cells = document.getElementsByClassName('board-game-cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', () => {
      console.log(`You found me! ${i}`);
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
