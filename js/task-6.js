function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}


createButton.addEventListener("click", handleClick);

function handleClick() {
  const input = document.querySelector("input");
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}

const destroyButton = document.querySelector("button[data-destroy]");

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}
