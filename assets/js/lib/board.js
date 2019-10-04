// Handles Render & Board Updates

const render = () => {
  let result = '';
  gameBoard.board.forEach((value) => {
    result += `<div class="boardgame-cell">
              <span class="boardgame-cell-value">${value}</span>
              </div>`;
  });
  document.getElementById('board').innerHTML = result;
};

window.render = render;
