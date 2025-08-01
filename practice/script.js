// // Step 1: Create the button
// let button = document.createElement("button");
// button.textContent = "Click me";

// // Step 2: Add a click event to change its content
// button.addEventListener("click", function () {
//   button.textContent = "You clicked!";
// });

// // Step 3: Append it to the body (or any container)
// document.body.appendChild(button);
let btn = document.querySelector("#btn");

    btn.addEventListener("click", (e) => {
      btn.textContent = "You clicked!";
      e.target.style.backgound = "blue"
    });