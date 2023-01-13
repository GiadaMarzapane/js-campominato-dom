/* -------------------COSTANTI------------------------------------- */
const play = document.getElementById('play');
const container = document.querySelector('.container');
const scoreDiv = document.querySelector('#punteggio');
const punteggio = document.querySelector('#punteggio > h2')
const myScore = document.querySelector('#punteggio > h3');

/* -------------------SVOLGIMENTO------------------------------------- */

play.addEventListener('click',
    function () {

        container.innerHTML = '';
        myScore.innerHTML = 0;
        punteggio.innerHTML = 'Il tuo punteggio è:';
        i = 0;
        gameOver = false;

        container.classList.remove('hidden');
        container.classList.add('flex');
        scoreDiv.classList.remove('hidden');
        
        const myBombs = arrayBomb();
        console.log(myBombs);

        for (let index = 1; index <= 100; index++) {
            let element = index;

            let myCell = createMyCell(element, myBombs);

            container.append(myCell);

            
            myCell.addEventListener('click',
                function () {
                    if(clicked == true){
                        myScore.innerHTML = i;
                    }
                    else if (gameOver == false && (myBombs.includes(element)) == false) {
                        i++;
                        myScore.innerHTML = i;
                        if (i >= 84) {
                            punteggio.innerHTML = 'HAI VINTO!!!';
                            gameOver = true;
                        }
                    }
                    else {
                        punteggio.innerHTML = 'Hai perso... Il tuo punteggio è: ';
                        myScore.innerHTML = i;
                        gameOver = true;
                    }
                }
            )
        }        
    }
)
let i = 0;
let gameOver = false;
let clicked = false;

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

function createMyCell (element, myBombArray){
    const cell = document.createElement('div');
    cell.classList.add('my-cell');
    cell.innerHTML += element;

    cell.addEventListener('click',
        function () {

            if (cell.className.includes('flower') == true){
                clicked = true;
            }
            else if (gameOver == false && cell.className.includes('flower') == false){
                cell.classList.add('flower');
                clicked = false;
            }
            
            if ((gameOver == false) && (myBombArray.includes(element))){
                cell.classList.add('bomb');
                cell.classList.remove('flower');
                gameOver = true;    
                clicked = false;
            }
                        
            // console.log('Numero cliccato', cell.innerHTML);
        }
    )

    return cell;
}

function randomNumbers () {
    return Math.ceil(Math.random() * 100);
}
        