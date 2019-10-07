/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import { Player } from './player.js';
import { board } from './board.js';
// import { GameEvaluator } from './gameEvaluator.js '

export const gameController = (() => {
  // let currentPlayer;
  // let winner = false;
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  let player1;
  let player2;

  const createPlayers = (nameP1, nameP2) => {
    player1 = Player(nameP1, 'X');
    player2 = Player(nameP2, 'O');
  };

  const setup = (nameP1, nameP2) => {
    createPlayers(nameP1, nameP2);
    board.welcome(nameP1, nameP2);
    board.render(gameBoard);
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

  return {
    setup,
    match,
    end,
    player1,
    player2,
  };
})();
