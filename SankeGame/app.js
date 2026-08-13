const board = document.querySelector('.board');
const boardHeight = 50;
const boardWidth = 50;
const blocks = [];
const snake = [{x:1,y:3},{x:1,y:4},{x:1,y:5}];
let direction = "down";
let intervalClear = null;
const rows = Math.floor(board.clientHeight/boardHeight);
const cols = Math.floor(board.clientWidth/boardWidth);
let food = {x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};
for(let row=0; row<rows; row++){
    for(let col=0; col<cols; col++){
        const block = document.createElement('div');
        block.classList.add("block");
        board.appendChild(block);
        block.innerHTML = `${row}-${col}`;
        blocks[`${row}-${col}`] = block;
    }
}

function rander(){
    snake.forEach(e =>{
        console.log(blocks[`${e.x}-${e.y}`].classList.add("fill"));
    })
};

intervalClear = setInterval(() =>{
    let head = null;
    if(direction === "left"){
        head = {
            x: snake[0].x , 
            y: snake[0].y - 1
        };
    }
    if(direction === "right"){
        head = {
            x: snake[0].x , 
            y: snake[0].y + 1
        };
    }
    if(direction === "up"){
        head = {
            x: snake[0].x - 1, 
            y: snake[0].y
        };
    }
    if(direction === "down"){
        head = {
            x: snake[0].x + 1, 
            y: snake[0].y
        };
    }
    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols){
        alert("Game is Over");
        clearInterval(intervalClear);
    }
    snake.forEach(e =>{
        blocks[`${e.x}-${e.y}`].classList.remove("fill");
    })
    snake.unshift(head);
    snake.pop();
    rander();
},600);
// // ArrowUp
// 6app.js:22 undefined
// app.js:61 ArrowDown
// 6app.js:22 undefined
// app.js:61 ArrowRight
// 6app.js:22 undefined
// app.js:61 ArrowLeft
// // 
addEventListener("keydown",(e) => {
    if(e.key === 'ArrowUp'){
        direction = 'up';
    }else if(e.key === 'ArrowDown'){
        direction = 'down';
    }else if(e.key === 'ArrowRight'){
        direction = 'right';
    }else if (e.key === 'ArrowLeft'){
        direction = 'left';
    }
})