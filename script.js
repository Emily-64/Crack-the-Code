let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⛔ Enter a number between 1 and 100!";
  } else if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
  } else {
    const diff = Math.abs(guess - secretNumber);
    if (diff <= 5) {
      message.textContent = guess > secretNumber ? "🔥 Very close! Try lower!" : "🔥 Very close! Try higher!";
    } else if (diff <= 15) {
      message.textContent = guess > secretNumber ? "🌡️ Getting warmer, try lower!" : "🌡️ Getting warmer, try higher!";
    } else {
      message.textContent = guess > secretNumber ? "❄️ Too high!" : "❄️ Too low!";
    }
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
}
