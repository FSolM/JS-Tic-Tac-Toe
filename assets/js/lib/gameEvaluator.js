/* eslint-disable import/prefer-default-export */

export const gameEvaluator = (() => {
  const checkPlayerWon = (board, token) => {
    if (board[0] === token && board[1] === token && board[2] === token) {
      return true;
    }
    if (board[3] === token && board[4] === token && board[5] === token) {
      return true;
    }
    if (board[6] === token && board[7] === token && board[8] === token) {
      return true;
    }
    if (board[0] === token && board[3] === token && board[6] === token) {
      return true;
    }
    if (board[1] === token && board[4] === token && board[7] === token) {
      return true;
    }
    if (board[2] === token && board[5] === token && board[8] === token) {
      return true;
    }
    if (board[0] === token && board[4] === token && board[8] === token) {
      return true;
    }
    if (board[2] === token && board[4] === token && board[6] === token) {
      return true;
    }
    return false;
  };

  const checkTie = (board) => {
    let counter = 9;
    board.forEach((value) => {
      if (value !== '') {
        counter -= 1;
      }
    });
    return counter === 0;
  };

  return { checkPlayerWon, checkTie };
})();
