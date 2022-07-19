// TODO: 16x16 square divs using JS
// TODO: Append them to a parent container
// TODO: Convert divs to a grid
// TODO: Hover effect of a color change when the mouse passes through
// TODO: Button on top to prompt user for no. of squares - max 100 (must replace the old grid)

// Finds grid div element and creates the grid board
const grid = document.querySelector(".grid")
grid.style.gridTemplateColumns = "repeat(16, 1fr)"
grid.style.gridTemplateRows = "repeat(16, 1fr)"

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
     square.style.backgroundColor = "white";
     grid.insertAdjacentElement("beforeend", square);
}









// function that creates the grid - Taken from StackOverflow
// function makeRows(rows, cols) {
//     container.style.display = "grid";
//     container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
//     container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
//     // container.style.setProperty('--grid-rows', rows);
//     // container.style.setProperty('--grid-cols', cols);
//     for (c = 0; c < (rows * cols); c++) {
//         let cell = document.createElement("div");
//         cell.addEventListener('mouseover', function(e){
//             e.target.style.backgroundColor = 'black';
//         })
//         container.appendChild(cell).className = "grid-item"
//     };
// };
// makeRows (16, 16);

// // Adds the reset button, and event listener for it
// const reset = document.querySelector('#reset')
// function resetButton(rows, cols) {
//     while (container.firstChild) {
//         container.removeChild(container.lastChild);
//     }
//     makeRows(16,16);
// }
// reset.addEventListener('click', resetButton)


