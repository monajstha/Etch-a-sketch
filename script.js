const sketchBoardWidth = 680;

const container = document.querySelector(".container");
// Create a parent div to place button
const btnContainer = document.createElement("div");
btnContainer.style.width = "100%";

// Create a button
const customizeBtn = document.createElement("button");
customizeBtn.textContent = "Change Layout";
customizeBtn.style.alignSelf = "flex-end";

// append button container the button
btnContainer.appendChild(customizeBtn);
container.appendChild(btnContainer);

// Create the container to wrap the grid
const gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "grid-container");
gridContainer.style.width = `${sketchBoardWidth}px`;
container.appendChild(gridContainer);

// Change layout button event listener
customizeBtn.addEventListener("click", () => {
  let numOfSquaresOnOneSide = prompt(
    "Enter the number of squares you want on one side:"
  );
  if (numOfSquaresOnOneSide > 100) return;
  createGrid(numOfSquaresOnOneSide);
});

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
    grid.style.border = "1px solid lightGray";
    grid.setAttribute("class", "grid-box");

    // change colour on hover
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "red";
    });

    gridContainer.appendChild(grid);
  }
}

createGrid(16);
