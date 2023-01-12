const play = document.getElementById('play');
const container = document.querySelector('.container');
const myChoice = document.getElementById('my-choice');

play.addEventListener('click',

    function(){

        if (myChoice.value == 'easy'){
            easyLevel()
            
        }
        else if (myChoice.value == 'medium'){
            mediumLevel()
        }
        else if (myChoice.value == 'hard') {
            hardLevel()
        }
    }

)


function easyLevel() {
    for (let index = 1; index <= 100; index++) {
        const element = index;

        const myCell = document.createElement('div');
        myCell.innerHTML += element;
        myCell.classList.add('my-cell');
        myCell.classList.add('easy');
        container.append(myCell);

        container.classList.remove('hidden');
        container.classList.add('flex');      

        myCell.addEventListener('click',
            function () {
                
                if (myCell.classList.contains('blu')) {
                    myCell.classList.remove('blu');
                }
                else {
                    myCell.classList.add('blu');
                }
                
                console.log('Numero cliccato', myCell.innerHTML);                
        }
        )
    }   
}

function mediumLevel() {
    for (let index = 1; index <= 81; index++) {
        const element = index;

        const myCell = document.createElement('div');
        myCell.innerHTML += element;
        myCell.classList.add('my-cell');
        myCell.classList.add('medium');
        container.append(myCell);        

        container.classList.remove('hidden');
        container.classList.add('flex');
                    
        myCell.addEventListener('click',
            function () {

                if (myCell.classList.contains('blu')) {
                    myCell.classList.remove('blu');
                }
                else {
                    myCell.classList.add('blu');
                }

                console.log('Numero cliccato', myCell.innerHTML);
            }
        )
    }
}

function hardLevel() {
    for (let index = 1; index <= 49; index++) {
        const element = index;

        const myCell = document.createElement('div');
        myCell.innerHTML += element;
        myCell.classList.add('my-cell');
        myCell.classList.add('hard');
        container.append(myCell);

        container.classList.remove('hidden');
        container.classList.add('flex');

        myCell.addEventListener('click',
            function () {
                
                if (myCell.classList.contains('blu')) {
                    myCell.classList.remove('blu');
                }
                else {
                    myCell.classList.add('blu');
                }

                console.log('Numero cliccato', myCell.innerHTML);
            }
        )
    }
}