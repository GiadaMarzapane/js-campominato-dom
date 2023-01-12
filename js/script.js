const play = document.getElementById('play');
const container = document.querySelector('.container');
const myBombs = arrayBomb();
console.log(myBombs);

for (let index = 1; index <= 100; index++) {
    let element = index;

    let myCell = createMyCell(element);    

    container.append(myCell);
    
    play.addEventListener('click',
        function(){
    
            container.classList.remove('hidden');
            container.classList.add('flex');
        }
    )
}

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

/* -----------------FUNCTIONS--------------------------*/

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
        