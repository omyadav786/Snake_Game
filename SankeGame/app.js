const board = document.querySelector('.board');
const boardHeight = 30;
const boardWidth = 30;
const row = Math.floor(board.clientHeight/boardHeight);
const col = Math.floor(board.clientWidth/boardWidth);
for(let i=0; i<row*col; i++){
    const block = document.createElement('div');
    block.classList.add("block");
    board.appendChild(block);
}