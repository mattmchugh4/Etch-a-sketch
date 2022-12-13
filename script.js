
let id =1;
let color = 'black';

function grid(side) {
    const container = document.querySelector('.container');

    let allGridElements = document.querySelectorAll('.grid-element');
    for(const node of allGridElements) {
        node.remove();
    }

  
    container.style.gridTemplateColumns =`repeat(${side}, 1fr)`;

    for(let i = 0; i < (side * side); i++) {

        let div = document.createElement('div');
        div.classList.add('grid-element');
        div.setAttribute('id', id);
        id++;
        container.appendChild(div);
        div.addEventListener('mouseover', colorGrid); 
    }
}


function colorGrid() {
    if(color === 'black')
        this.style.backgroundColor = 'black';
    else {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}

grid(16);


const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    let allGridElements1 = document.querySelectorAll('.grid-element');
    for(const node of allGridElements1) {
        node.style.backgroundColor = 'white';
    }
});

const size = document.querySelector('.slider');
size.addEventListener('mouseup',() => {
    id = 1;
    grid(size.value);
});

const rainbow = document.querySelector('#rainbow');

rainbow.addEventListener('click', () => {
    color = rainbow;
    grid(16);
});


function mosiacCreator() {
    grid(50);

    let allGridElements2 = document.querySelectorAll('.grid-element');

    for(const node of allGridElements2) {
        node.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}


const mosiac = document.querySelector('#mosiac');

mosiac.addEventListener('click', mosiacCreator);