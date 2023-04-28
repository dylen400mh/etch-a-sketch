
// creates 16x16 grid
const container = document.querySelector(".container");

let isMouseDown = false;

container.addEventListener("mousedown", () => {
    isMouseDown = true;
})
container.addEventListener("mouseup", () => {
    isMouseDown = false;
})

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        if (isMouseDown) {
            square.classList.add("trail");
        }
    })
    container.appendChild(square);
}


