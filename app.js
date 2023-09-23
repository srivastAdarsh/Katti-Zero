let gameOver=false;
let turn='X';
let clickCount=0;

//Main logic
let squares=document.querySelectorAll(".box");
squares.forEach((element)=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='' && !gameOver){
            boxtext.innerText=turn;

            //check win
            checkWin();

            //check draw
            clickCount++;
            if(clickCount===9){
                if(!gameOver) document.querySelector('.whoseTurn').innerText=`Ooopppsss!!! DRAW!!!!`;
                gameOver=true;
            }

            //change turn 
            turn=changeTurn();
            if(!gameOver) document.querySelector('.whoseTurn').innerText=`${turn}'s turn`;
        }
    })
})


//Function to reset the game
const resetButton=document.querySelector('button');
resetButton.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    boxtext.forEach((element)=>{
        element.innerText='';
    })
    gameOver=false;
    turn='X';
    document.querySelector('.whoseTurn').innerText=`${turn}'s turn`;
    clickCount=0;
})


// Function to change turn
const changeTurn = ()=>{
    if(turn==='X') return '0';
    return 'X';
}

//Function to check win
const checkWin = ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    let possibleWins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    possibleWins.forEach((e) =>{
        if(boxtext[e[0]].innerText!=='' && boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[2]].innerText===boxtext[e[1]].innerText){
            document.querySelector('.whoseTurn').innerText=`Hurray!!! ${boxtext[e[0]].innerText} WON!!!!!`
            gameOver=true;
        }
        
    })
}