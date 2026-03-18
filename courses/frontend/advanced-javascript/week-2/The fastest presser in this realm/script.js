// Select HTML elements
const gameDuration = document.getElementById("gameDuration");
const startGame = document.getElementById("startGame");
const result = document.getElementById("result");
const lCountSpan = document.getElementById("lCount");
const sCountSpan = document.getElementById("sCount");

// Counters and game flag
let lCount = 0;
let sCount = 0;
let gameActive = false;

//  Function to reset the game
function resetGame() {
  lCount = 0;
  sCount = 0;
  lCountSpan.textContent = 0;
  sCountSpan.textContent = 0;
  result.textContent = "";
}

//  Function to start the game
function startTheGame() {
  resetGame();

  const duration = Number(gameDuration.value);

  if (isNaN(duration) || duration <= 0) {
    result.textContent = "Please enter a valid number of seconds!";
    return;
  }

  gameActive = true;
  result.textContent = `Game started! Press "L" or "S" as fast as you can!`;

  // Stop the game after the specified duration
  setTimeout(endGame, duration * 1000);
}

// Function to end the game and declare the winner
function endGame() {
  gameActive = false;

  if (lCount > sCount) {
    result.textContent = `🏆 Player L wins with ${lCount} presses!`;
  } else if (sCount > lCount) {
    result.textContent = `🏆 Player S wins with ${sCount} presses!`;
  } else {
    result.textContent = `🤝 It's a tie! L:${lCount} S:${sCount} presses`;
  }
}

//  Event listener for key presses
document.addEventListener("keydown", function (event) {
  if (!gameActive) return;

  if (event.key === "l") {
    lCount++;
    lCountSpan.textContent = lCount;
  } else if (event.key === "s") {
    sCount++;
    sCountSpan.textContent = sCount;
  }
});

//  Event listener for start button
startGame.addEventListener("click", startTheGame);
