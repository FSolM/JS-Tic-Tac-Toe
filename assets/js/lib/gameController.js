/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import { Player } from './player.js';
import { board } from './board.js';
import { gameEvaluator } from './gameEvaluator.js';

export const gameController = (() => {
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  let player1;
  let player2;
  let currentPlayer;

  const createPlayers = (nameP1, nameP2) => {
    player1 = Player(nameP1, 'X');
    player2 = Player(nameP2, 'O');
  };

  const getCurrentPlayer = () => currentPlayer;

  const setCurrentPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  const setup = (nameP1, nameP2) => {
    
    createPlayers(nameP1, nameP2);
    board.welcome(nameP1, nameP2);
    board.render(gameBoard);
    setCurrentPlayer();
    document.getElementById('game-over').classList.add('set-hidden');
  };

  const gameStatus = () => gameEvaluator.checkPlayerWon(gameBoard, currentPlayer.getToken());

  const printWinner = (name) => {
    board.injectWinner(name);
  };

  const printTie = () => {
    if (gameEvaluator.checkTie(gameBoard)) {
      board.injectTie();
      return true;
    }
    return false;
  };

  return {
    gameBoard,
    getCurrentPlayer,
    setCurrentPlayer,
    setup,
    gameStatus,
    printWinner,
    printTie,
  };
})();
