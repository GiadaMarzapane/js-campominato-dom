/* -------------------COSTANTI------------------------------------- */
const play = document.getElementById('play');
const container = document.querySelector('.container');
const scoreDiv = document.querySelector('#punteggio');
const punteggio = document.querySelector('#punteggio > h2')
const myScore = document.querySelector('#punteggio > h3');
const myBombs = arrayBomb();
console.log(myBombs);

/* -------------------SVOLGIMENTO------------------------------------- */

play.addEventListener('click',
    function () {

        container.classList.remove('hidden');
        container.classList.add('flex');
        scoreDiv.classList.remove('hidden');
    }
)

let i = 0;

let gameOver = false;

for (let index = 1; index <= 100; index++) {
    let element = index;

    let myCell = createMyCell(element);    

    container.append(myCell);    
    
    myCell.addEventListener('click',
        function(){                
            if (gameOver == false && (myBombs.includes(element)) == false){
                // console.log('Cella cliccata fiore');
                i++;
                myScore.innerHTML = i;                
            }
            else if (i >= 84) {
                punteggio.innerHTML = 'HAI VINTO!!!';
                gameOver = true;
            }
            
            else{
                punteggio.innerHTML = 'Hai perso... Il tuo punteggio è: ';
                myScore.innerHTML = i;
                gameOver = true;
            }
        }
    )
}

/* -----------------FUNCTIONS--------------------------*/

function arrayBomb() {
    const myRandomNumbers = [];

    let index = 1;
    let random = randomNumbers();

    while (index <= 16) {


        while (myRandomNumbers.includes(random)) {
            random = randomNumbers();
        }
        myRandomNumbers.push(random);

        index++
    }
    return myRandomNumbers;
}

function createMyCell (element){
    const cell = document.createElement('div');
    cell.classList.add('my-cell');
    cell.innerHTML += element;

    cell.addEventListener('click',
        function () {
            if (gameOver == false){
                cell.classList.add('flower');
            }
            
            if ((gameOver== false) || (myBombs.includes(element))){
                cell.classList.add('bomb');
                cell.classList.remove('flower');
                gameOver = true;                
            }    
                        
            // console.log('Numero cliccato', cell.innerHTML);
        }
    )

    return cell;
}

function randomNumbers () {
    return Math.ceil(Math.random() * 100);
}
        