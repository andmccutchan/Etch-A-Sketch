const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");
const eraseBtn = document.querySelector(".erase-btn");


// Render 16 x 16 grid on page
// for (let i = 0; i < 256; i++) {
//     const cell = document.createElement("div");
//     cell.className = `cell cell-${i + 1}`;
//     cell.style.width = "50px"
//     cell.style.height = "50px";
//     cell.style.border = "2px solid"
//     container.appendChild(cell);
//     cell.addEventListener("mouseenter", () => {
//         cell.style.backgroundColor = "black";
//     })
//     cell.addEventListener('mouseleave', () => {
//         cell.style.backgroundColor = "white";
//     })
// }

gridBtn.addEventListener('click', () => {
    container.innerHTML = "";
    const gridSize = Number(prompt("Enter a grid size"));
    for (let i = 0; i < (gridSize**2); i++) {
        const cell = document.createElement("div");
        cell.className = `cell cell-${i + 1}`;
        cell.style.width = `${800 / gridSize}px`;
        cell.style.height = `${800 / gridSize}px`;
        cell.style.border = "2px solid"
        container.appendChild(cell);
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black";
        })
    }
})

eraseBtn.addEventListener('click', () => {
    for ()
})