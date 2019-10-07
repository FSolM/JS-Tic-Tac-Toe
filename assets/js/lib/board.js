/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

export const board = (() => {
  const render = (gameBoard) => {
    let result = '';
    gameBoard.forEach((value, index) => {
      result += `<div id="index-${index}" class="board-game-cell"></div>`;
    });
    document.getElementById('board').innerHTML = result;
  };

  const welcome = (nameP1, nameP2) => {
    const playerForm = document.getElementById('player-input');
    playerForm.classList.add('set-hidden');
    playerForm.classList.remove('player-input');
    const versus = document.getElementById('versus-container');
    versus.classList.remove('set-hidden');
    versus.innerHTML = `<h1>${nameP1} (X) vs ${nameP2} (O)</h1>`;
  };

  const injectWinner = (name) => {
    const element = document.getElementById('game-over');
    let html = element.innerHTML;
    html += `<h1 class="winner-title">${name} Won!</h1>`;
    element.innerHTML = html;
  };

  const injectTie = () => {
    const element = document.getElementById('game-over');
    let html = element.innerHTML;
    html += "<h1 class='winner-title'>It's a Tie</h1>";
    element.innerHTML = html;
  };

  return {
    render,
    welcome,
    injectWinner,
    injectTie,
  };
})();
