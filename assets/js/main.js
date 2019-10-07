/* eslint-disable no-console */
import { gameController } from './lib/gameController.js';

/* (() => gameController)();


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
document.getElementById('player-input').addEventListener('click',(e) => {

    const player1_name = document.getElementById('player1').value;
    const player2_name = document.getElementById('player2').value;

    gameController.createPlayers(player1_name, player2_name);
    console.log(gameController.getPlayers);
    gameController.setup();

})