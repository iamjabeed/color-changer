let btnEL = document.getElementById("button");
let canvasEL = document.getElementById("canvas");
function randomColor() {
  let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
  let randomcode = "#";
  for (let i = 0; i < 6; i++) {
    randomcode += hex[Math.floor(Math.random() * hex.length)];
  }
  return randomcode;
}
btnEL.addEventListener("click", () => {
  canvasEL.style.backgroundColor = randomColor();
});
