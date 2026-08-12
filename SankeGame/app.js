const board = document.querySelector('.board');
const boardHeight = 30;
const boardWidth = 30;
const rows = Math.floor(board.clientHeight/boardHeight);
const cols = Math.floor(board.clientWidth/boardWidth);

for(let row=0; row<rows; row++){
    for(let col=0; col<cols; col++){
        const block = document.createElement('div');
        block.classList.add("block");
        board.appendChild(block);
    }
}