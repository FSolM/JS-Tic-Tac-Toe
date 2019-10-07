// Handles Render & Board Updates

const Board = (() => {

  const render = (gameBoard) => {
    let result = '';
    gameBoard.board.forEach((value) => {
      result += `<div class="boardgame-cell">
                <span class="boardgame-cell-value">${value}</span>
                </div>`;
    });
    document.getElementById('board').innerHTML = result;
  };

  const welcome = (p1_name, p2_name) => {
    // hide inputs
    document.getElementById('player-input').classList.add('set-hidden');
    // show versus title
    let versus = document.getElementById('versus-container');
    versus.classList.remove('set-hidden');
    versus.innerHTML = `<h1>${p1_name} vs ${p2_name}</h1>`
  };

  return { render, welcome }

})();




export { Board }