// * TODO: 16x16 square divs using JS
// * TODO: Append them to a parent container
// * TODO: Convert divs to a grid
// * TODO: Reset button
// * TODO: Random color button
// * TODO: Beautify the UI
// * TODO: Hover effect of a color change when the mouse passes through
// * TODO: Button on top to prompt user for no. of squares - max 100 (must replace the old grid)

/*
    UPDATE: This project has een completed. I wanted to add a color well and have the mouseover change color but I couldn't get it after wrecking my brain. 
    I will make sure I come back to this.
    
    Signed: KonceptD (KJ) 19/07/2022 - 16:33pm
*/



let color = "black";
// const inputColor = document.querySelector("#colorbtn");

function setGrid(size) {

    // Finds grid div element
    const grid = document.querySelector(".grid")
    // removes all the previous divs on the grid

    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    // Sets size for grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    // Creates the Grid using divs including event listener for the mouseover
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }
}

// Sets the Grid at the 16x16 as specified
setGrid(16);

// Sets the size and ensures user only inputs between 2-100
function setSize(input) {
    if (input >= 2 && input <= 100) {
        setGrid(input)
    }
    else {
        console.log("Choose between 2 - 100 for the grid")
    }
} 

// Function for the "Random" button
function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } 
    else {
        this.style.backgroundColor = color;
    }
}

// Function for changing the color 
function colorChange(selection) {
    color = selection;
}

// Function for the "Reset" button
function resetGrid() {
    const grid = document.querySelector(".grid")  
    let squares = grid.querySelectorAll("div");
    // Decided to change the squares to be white instead of removing it
    squares.forEach((div) => div.style.backgroundColor = "white");
}

// inputColor.addEventListener("inu", () => {
//     const selectedColor = this.currentTarget.value;
//     const grid = document.querySelector(".grid")  
//     let square = grid.querySelectorAll("div");
//     inputColorVal = selectedColor;
//     square.style.backgroundColor = colorSquare(inputColorVal); 
   
// });
// inputColor.addEventListener("input", () => 
// })

// function colorPicker() {
//    color = this.style.backgroundColor;
//    colorChange(color);
    
// }







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
