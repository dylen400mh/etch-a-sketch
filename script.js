// creates 16x16 grid
function createGrid(size) {

    removeGrid();

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // square turns red if mouse is held
        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                square.classList.add("trail");
            }
        })

        container.appendChild(square);
    }

    // subtract 2 to account for borders
    const squareSize = (800 / size) - 2;

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    })
}

function removeGrid() {
    //remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const container = document.querySelector(".container");

let isMouseDown = false;

container.addEventListener("mousedown", () => {
    isMouseDown = true;
})
container.addEventListener("mouseup", () => {
    isMouseDown = false;
})

const newGridButton = document.querySelector(".new-grid-button");

newGridButton.addEventListener("click", () => {
    let input = prompt("Enter the new size of the grid.");
    let size = parseInt(input);

    createGrid(size);
})

// creates intial 16x16 grid
createGrid(16);
