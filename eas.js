const grid = document.querySelector('#grid');
const gridResize = document.querySelector('#gridResize');
const clear = document.querySelector('#clear');
const colorPicker = document.querySelector('#colorPicker');

let size = 16;

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0 ; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
    
            square.addEventListener('mouseenter', (event) => {
                square.classList.add('colored');
            });
        }
    }
}

makeGrid(size);

gridResize.addEventListener('click', () => {
    do {
        size = Number(prompt('Enter the size of the Grid(from 1 to 100): ', 16));
    } while (size > 100 || size <= 0)

    grid.innerHTML = "";
    
    makeGrid(size);
});

clear.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('colored');
    });
});
