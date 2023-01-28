const guessCountValue = document.getElementById("guessCount");
const guessMsg = document.getElementById("guessResult");
let min = 1,
  max = 20;

const random = Math.floor(Math.random() * (max - min) + min);
const btn = (document.getElementById("button").onclick = guessFun);

let guessCount = 0;
function guessFun() {
  const input = document.getElementById("input").value;
  guessCount += 1;
  guessCountValue.innerText = guessCount;

  if (input == random) {
    guessMsg.textContent = "Good guess";
  } else if (input < random) {
    guessMsg.textContent = "Low";
  } else if (input > random) {
    guessMsg.textContent = "High";
  }
}
