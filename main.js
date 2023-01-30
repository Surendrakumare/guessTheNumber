const guessCountValue = document.getElementById("guessCount");
const guessMsg = document.getElementById("guessResult");
const chance = document.getElementById("chance");
const congratsMsg = document.querySelector(".congratsMsg");
const startbutn = (document.getElementById("startbutn").onclick = start);
let min = 1,
  max = 20;
let count, random, guessCount;
document.getElementById("button").addEventListener("click", guessFun);
document.getElementById("startbutn").addEventListener("click", start);

function start() {
  count = 4;
  guessCount = 0;
  document.getElementById("startbutn").textContent = "restart";
  guessCountValue.innerText = "0";
  chance.textContent = 5;
  document.getElementById("guessleft").textContent = "";
  random = getRandom();
}

function getRandom() {
  return Math.floor(Math.random() * (max - min) + min);
}

function guessFun() {
  if (count >= 0) {
    const input = document.getElementById("input").value;
    guessCount += 1;
    guessCountValue.innerText = guessCount;
    chance.textContent = count;
    if (input == random) {
      guessMsg.textContent = "Good guess";
      congratsMsg.textContent = "You won !!";
    } else if (input < random) {
      guessMsg.textContent = "Low";
    } else if (input > random) {
      guessMsg.textContent = "High";
    }
    count -= 1;
  } else {
    document.getElementById("guessleft").textContent =
      "You Exceeds your chances";
  }
}
