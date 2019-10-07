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

document.getElementById('input-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const nameP1 = document.getElementById('player1').value;
  const nameP2 = document.getElementById('player2').value;
  gameController.setup(nameP1, nameP2);
});
