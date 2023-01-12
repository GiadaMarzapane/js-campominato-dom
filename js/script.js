const play = document.getElementById('play');
const container = document.querySelector('.container');
const scoreDiv = document.querySelector('#punteggio');
const myScore = document.querySelector('#punteggio > h3');
const myBombs = arrayBomb();
console.log(myBombs);

let i = 0;

for (let index = 1; index <= 100; index++) {
    let element = index;

    let myCell = createMyCell(element);    

    container.append(myCell);
    
    play.addEventListener('click',
        function(){
    
            container.classList.remove('hidden');
            container.classList.add('flex');
            scoreDiv.classList.remove('hidden');
        }
    )

    
    myCell.addEventListener('click',
        function(){                
                if ((myBombs.includes(element)) == false){
                    console.log('Cella cliccata fiore');
                    i++;
                    myScore.innerHTML = i;
                }
                else{
                    console.log('Cella cliccata bomba');        
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
            
            cell.classList.add('flower');

            if (myBombs.includes(element)) {
                cell.classList.add('bomb');
                cell.classList.remove('flower');
            }


            console.log('Numero cliccato', cell.innerHTML);
        }
    )

    return cell;
}

function randomNumbers () {
    return Math.ceil(Math.random() * 100);
}
        