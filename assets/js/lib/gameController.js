// Handles Game Logic & Current Player Turn
import { Player } from './player.js'
import { Board } from './board.js'
import { GameEvaluator } from './gameEvaluator.js '

const gameController = (() => {

  let currentPlayer;
  
  let winner = false;
  
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  
  let player1;
  let player2;


  const createPlayers = (player1_name, player2_name) =>{

    player1 = Player(player1_name, "X");    
    player2 = Player(player2_name, "O");
  
  };

  const setup = () =>{
     Board.welcome(player1.getName(), player2.getName());
  };

  const match = () => {
    //while (!winner) {
      // render board
      // decide turns
      // player play
      // board evalution
      //}
  };
  // finish

  const end = () => {

  };

  return { setup, match, end, player1, player2, createPlayers }

})();

export { gameController }