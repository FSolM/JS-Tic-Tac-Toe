/* eslint-disable no-console */

const { Player } = require('./lib/players');

const player1 = Player.create('Player', 'X');
console.log(player1);

// Gameboard
/*
const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

const gameController = (() => {  })();

// Board generator
(() => { render(); })();
*/
