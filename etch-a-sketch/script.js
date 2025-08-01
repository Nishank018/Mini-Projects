document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const resetBtn = document.getElementById("reset");

  function createGrid(size) {
    container.innerHTML = ""; // Clear previous grid
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });

      container.appendChild(square);
    }
  }

  resetBtn.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter grid size (max 100):"));
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
      alert("Please enter a number between 1 and 100");
      return;
    }
    createGrid(newSize);
  });

  createGrid(16); // Default grid
});
