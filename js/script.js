const play = document.getElementById('play');
const container = document.querySelector('.container');    

for (let index = 1; index <= 100; index++) {
    const element = index;

    const myCell = createMyCell(element);
    container.append(myCell);
    
    play.addEventListener('click',
        function(){
    
            container.classList.remove('hidden');
            container.classList.add('flex');
        }
    )
}

/* -----------------FUNCTIONS--------------------------*/

function createMyCell (element){
    const cell = document.createElement('div');
    cell.classList.add('my-cell');
    cell.innerHTML += element;

    cell.addEventListener('click',
        function () {
            cell.classList.add('blu');

            console.log('Numero cliccato', cell.innerHTML);
        }
    )

    return cell;
}

function randomNumbers (min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
        