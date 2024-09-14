const colorContainer = document.querySelector(".colors");

for (let i = 0; i < 24; i++) {
  const colorElement = document.createElement("div");
  colorElement.classList.add("color");

  const hexColor = getRandomHexColor();
  colorElement.style.backgroundColor = hexColor;
  colorElement.innerText = hexColor;

  colorContainer.appendChild(colorElement);

  colorElement.addEventListener("click", () => {
    copyToClipboard(hexColor);
    alert(`Copied ${hexColor} to clipboard!`);
  });
}

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function refreshPage() {
  location.reload();
}
