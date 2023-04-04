const main = document.getElementById('main')
const mode = document.getElementById('switch-mode')

let fields = {}
let numberMines = 50
let start = false

function generateBoard(cols, rows){
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            main.innerHTML += `<div id="${i}-${j}" class="fields" onclick="startGame('${i}-${j}')"></div>`
            fields[`${i}-${j}`] = ''
        }
    }
}

function startGame(id){
    if (start){}
    else{
        fields[id] = 0;
        document.getElementById(id).style.background = 'white';

        while (numberMines >= 0){
            let r1 = Math.floor(Math.random()*15);
            let r2 = Math.floor(Math.random()*15);

            if (fields[`${r1}-${r2}`] == ''){
                fields[`${r1}-${r2}`] = -1

                document.getElementById(`${r1}-${r2}`).style.background = 'red';
                numberMines -= 1
            }
            
        }

        

        start = true;
    }
    console.log(fields)    
}















generateBoard(16, 16)











// class MineSweeperGame {
//     constructor(cols, rows, numberOfBombs, fields, firstClickCoordinates){
//         this.cols = cols
//         this.rows = rows
//         this.numberBombs = numberOfBombs
//         this.gameMode = true  // true - detonation false - mean
//         this.fields = fields
//         this.firstClickCoordinates = firstClickCoordinates

//         console.log(this.firstClickCoordinates)
//     }


//     startGame(){


//     }
//     switchMode(){
//         if (this.gameMode){
//             this.gameMode = false
//             mode.innerHTML = 'Mean'
//         } else{
//             this.gameMode = true
//             mode.innerHTML = 'Detonation'
//         }
//         console.log(this.gameMode)
//     }
// }

// function start(id, cols, rows){
//     for (let i = 0; i < cols; i++){
//         for (let j = 0; j < rows; j++){
//             document.getElementById(`${i}-${j}`).onclick = null
//         }
//     }
    
//     let game = new MineSweeperGame(16, 16, 50, fields, id)
//     mode.addEventListener('onclick', game.switchMode())

    
// }










// function generateBomb(id, numberBombs=50, x=16, y=16){

// }

// function clickField(id){
//     if (ifStart){
//         generateBomb(id, 50, 16, 16)
//         ifStart = false
//         document.getElementById(id).style.background = "#f2f2f2"
//         document.getElementById(id).onclick = null
//         document.getElementById(id).style.cursor = "default"
//     } else {
//         if (gameMode){
//             if (fields[id] == 'b'){
//                 console.log('Przegrałeś')
//             }else{
//                 document.getElementById(id).style.background = "#f2f2f2"
//                 document.getElementById(id).onclick = null
//                 document.getElementById(id).style.cursor = "default"
//             }
    
//         } else {
//             if (flagsPosition.includes(id)){
//                 document.getElementById(id).style.background = "#75a06b" 
//                 flagsPosition = flagsPosition.filter(x => x !== id)
//             } else {
//                 document.getElementById(id).style.background = "#cf3d29" 
//                 flagsPosition.push(id)
//             }  
//         }
//     }
// }