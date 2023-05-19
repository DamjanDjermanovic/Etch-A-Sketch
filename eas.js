const grid = document.querySelector('#grid');
const gridResize = document.querySelector('#gridResize');
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
        size = Number(prompt('Enter the size of the Grid: ', 16));
    } while (size > 100 || size < 0)

    grid.innerHTML = "";
    
    makeGrid(size);
});

