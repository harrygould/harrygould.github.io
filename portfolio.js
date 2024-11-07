// alert("JavaScript is Working!");
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (name && email && message) {
//       document.getElementById("confirmationMessage").innerText =
//         "Thank you for your message!";
//       document.getElementById("contactForm").reset();
//     } else {
//       document.getElementById("confirmationMessage").innerText =
//         "Please fill out all fields.";
//     }
//   });

// // pacman game code!!!
// const canvas = document.getElementById("pacmanCanvas");
// const ctx = canvas.getContext("2d");
// const gridSize = 20;
// const rows = canvas.height / gridSize;
// const cols = canvas.width / gridSize;

// let pacman = { x: 1, y: 1, dx: 1, dy: 0 };
// let score = 0;
// let food = {
//   x: Math.floor(Math.random() * cols),
//   y: Math.floor(Math.random() * rows),
// };

// function drawPacman() {
//   ctx.fillStyle = "yellow";
//   ctx.beginPath();
//   ctx.arc(
//     pacman.x * gridSize + gridSize / 2,
//     pacman.y * gridSize + gridSize / 2,
//     gridSize / 2,
//     0.2 * Math.PI,
//     1.8 * Math.PI
//   ); // Mouth open effect
//   ctx.lineTo(
//     pacman.x * gridSize + gridSize / 2,
//     pacman.y * gridSize + gridSize / 2
//   ); // Close the mouth
//   ctx.fill();
// }

// function drawFood() {
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.arc(
//     food.x * gridSize + gridSize / 2,
//     food.y * gridSize + gridSize / 2,
//     gridSize / 3,
//     0,
//     2 * Math.PI
//   );
//   ctx.fill();
// }

// function update() {
//   // Move Pacman
//   pacman.x += pacman.dx;
//   pacman.y += pacman.dy;

//   // Wrap Pacman around edges
//   if (pacman.x < 0) pacman.x = cols - 1;
//   if (pacman.x >= cols) pacman.x = 0;
//   if (pacman.y < 0) pacman.y = rows - 1;
//   if (pacman.y >= rows) pacman.y = 0;

//   // Check if Pacman eats food
//   if (pacman.x === food.x && pacman.y === food.y) {
//     score += 10;
//     document.getElementById("score").textContent = `Score: ${score}`;
//     food = {
//       x: Math.floor(Math.random() * cols),
//       y: Math.floor(Math.random() * rows),
//     };
//   }
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
//   drawPacman();
//   drawFood();
// }

// function gameLoop() {
//   update();
//   draw();
//   requestAnimationFrame(gameLoop);
// }

// // Keyboard controls
// document.addEventListener("keydown", (e) => {
//   switch (e.key) {
//     case "ArrowUp":
//       pacman.dx = 0;
//       pacman.dy = -1;
//       break;
//     case "ArrowDown":
//       pacman.dx = 0;
//       pacman.dy = 1;
//       break;
//     case "ArrowLeft":
//       pacman.dx = -1;
//       pacman.dy = 0;
//       break;
//     case "ArrowRight":
//       pacman.dx = 1;
//       pacman.dy = 0;
//       break;
//   }
// });

// // Start game
// gameLoop();
