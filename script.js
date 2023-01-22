let cells = document.querySelectorAll('.box');
const statustext = document.getElementById('statustext');
const restartbtn = document.getElementById('restartbtn');
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let running=false;
let turn = "X"
let move = ["","","","","","","","",""]
initialize();
function initialize(){
    running=true;
    for(let i=0;i<cells.length;i++){
        cells[i].addEventListener('click',(event)=>{
            if(move[i]!=""){
                alert("Already Clicked")
            }
            else if(!running){
                return alert("Game Over")
            }
            else{
                event.target.innerText = turn    
                move[i]=turn
                changePlayer();
                checkWinner(event.target);
            }
        })
    }
}
function changePlayer(){
    turn==="X" ? turn="O" : turn="X"
    statustext.innerHTML=`${turn}'s turn`
}
function checkWinner(){
    let roundwon = false;
    for(let i=0;i<winCondition.length;i++){
        const condition = winCondition[i];
        const cellA = move[condition[0]];
        const cellB = move[condition[1]];
        const cellC = move[condition[2]];

        if(cellA==""||cellB==""||cellC==""){
            continue;
        }
        if(cellA==cellB && cellB==cellC){
            roundwon=true;
            break;  
        }
    }
    if(roundwon){
        turn==="X" ? turn="O" : turn="X";
        statustext.innerHTML = `${turn} wins`
        running=false;

    }else if(!move.includes("")){
        statustext.innerText=`Draw!`
        running=false;
    }
    
}
function restartGame(){
    console.log('clicked')
    move = ["","","","","","","","",""];
    turn = "X"
    cells.forEach(cell=>cell.innerHTML="");
    console.log(cells)
    statustext.textContent = `${turn}'s turn`
    running=true;
}