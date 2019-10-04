var render = window.render
// Gameboard
const gameBoard =(()=>{
    const board = ["","","",
                   "","","",
                   "","",""]

    return {board}
})();

const gameController = (()=>{

})();

// Player Factory
const Player = (token) =>{
    let moves = []
    const getToken = () => token;
    const getMoves = () => moves;
    const addMove = (move) =>{
        moves.push(move)
    }
    return {getToken, getMoves, addMove}
}

// Board generator
(function(){
    render();
})();

