const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");
const eraseBtn = document.querySelector(".erase-btn");
const resetBtn = document.querySelector(".reset-btn");

// Container size in px
let containerSize = 960;

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;



const renderGrid = (size) => {
    container.innerHTML = "";

    const gridSize = size * size;

    const gridSpace = 100 / size;

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.className = `cell cell-${i+1}`;
        container.appendChild(cell);

        cell.style.width = `${gridSpace}%`;
        cell.style.height = `${gridSpace}%`;

        let cellColorPercent = 90;

        cell.addEventListener("mouseenter", (e) => {
            e.preventDefault();
            
            cell.style.backgroundColor = `hsl(0, 0%, ${cellColorPercent}%)`;
            cellColorPercent -= 10;
        })

        eraseBtn.addEventListener('click', () =>{
            cell.style.backgroundColor = "white";
        })
    }
}

renderGrid(16);

gridBtn.addEventListener('click', () => {
    const newSize = Number(prompt("Enter a number"));
    if (newSize > 100) {
        alert("Please pick a number less than 100");
    } else {
        renderGrid(newSize);
    }
})

resetBtn.addEventListener('click', () => {
    renderGrid(16);
})