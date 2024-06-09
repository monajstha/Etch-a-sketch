const sketchBoardWidth = 600;
let mouseState = "";
let mouseButtonClick = "";

const container = document.querySelector(".container");

// Create a parent div to place button
const btnContainer = document.createElement("div");
btnContainer.style.width = "46%";
btnContainer.style.display = "flex";
btnContainer.style.flexDirection = "row";
btnContainer.style.justifyContent = "space-between";
btnContainer.textContent =
  "Click left on your mouse and drag to draw. Right click and drag to erase.\n";
// btnContainer.style.justifyContent = ;

// Create a button
const customizeBtn = document.createElement("button");
customizeBtn.textContent = "Change Layout";
// customizeBtn.style.alignSelf = "flex-end";

// append button container the button
btnContainer.appendChild(customizeBtn);
container.appendChild(btnContainer);

// Create the container to wrap the grid
const gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "grid-container");
gridContainer.style.width = `${sketchBoardWidth}px`;
gridContainer.style.border = "1px solid black";
gridContainer.style.marginTop = "10px";
container.appendChild(gridContainer);

// Change layout button event listener
customizeBtn.addEventListener("click", () => {
  let numOfSquaresOnOneSide = prompt(
    "Enter the number of squares you want on one side:"
  );
  if (numOfSquaresOnOneSide > 100) return;
  createGrid(numOfSquaresOnOneSide);
});

function generateRandomColors() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(numOfSquaresOnOneSide) {
  // Remove previous html
  gridContainer.innerHTML = "";
  const gridSquareWidth = sketchBoardWidth / numOfSquaresOnOneSide;
  console.log({ gridSquareWidth });
  const numOfSquares = numOfSquaresOnOneSide ** 2;
  for (let i = 0; i < numOfSquares; i++) {
    const grid = document.createElement("div");

    grid.style.width = `${gridSquareWidth}px`;
    grid.style.height = `${gridSquareWidth}px`;
    grid.style.backgroundColor = "white";
    // grid.style.border = "1px solid lightGray";
    grid.setAttribute("class", "grid-box");
    handleMouseEvents(grid);

    gridContainer.appendChild(grid);
  }
}

function handleMouseEvents(grid) {
  grid.addEventListener("mousedown", (e) => {
    if (e?.button === 0) {
      mouseState = "start_drawing";
    } else {
      mouseState = "start_erasing";
    }
  });

  grid.addEventListener("mousemove", (e) => {
    if (mouseState === "start_drawing") {
      grid.style.backgroundColor = generateRandomColors();
    } else if (mouseState === "start_erasing") {
      grid.style.backgroundColor = "white";
    } else {
      return;
    }
  });

  grid.addEventListener("mouseup", () => {
    mouseState = "end";
  });
}
gridContainer.addEventListener("contextmenu", (e) => e.preventDefault());

createGrid(16);
