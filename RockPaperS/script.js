
let humanscore = 0;
let computerscore = 0;
let round = 1;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanscore++;
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerscore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function updateUI(message) {
  document.getElementById("score").textContent = `You: ${humanscore} | Computer: ${computerscore}`;
  document.getElementById("result").textContent = message;
  document.getElementById("round").textContent = `Round: ${round} / 5`;
}

function endGame() {
  let finalMsg = "";
  if (humanscore > computerscore) finalMsg = "You won the game!";
  else if (humanscore < computerscore) finalMsg = "Computer won the game!";
  else finalMsg = "It's a draw!";

  updateUI(finalMsg);
  // Disable buttons
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function handleClick(playerChoice) {
  if (round > 5) return;

  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  updateUI(result);

  round++;

  if (round > 5) {
    endGame();
  }
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => handleClick("rock"));
document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));
