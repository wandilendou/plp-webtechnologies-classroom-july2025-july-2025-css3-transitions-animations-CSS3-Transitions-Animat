
// Part 2: JS Functions


// Global variable (scope example)
let globalNumber = 5;

// Function with parameter & return value
function calculateSquare(num) {
  return num * num;
}

// Function that demonstrates local scope
function localScopeDemo() {
  let localNumber = 10;
  return localNumber + globalNumber; 
}

// Attach to button
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

calcBtn.addEventListener("click", () => {
  let inputNumber = globalNumber; 
  let square = calculateSquare(inputNumber);
  let localSum = localScopeDemo();

  calcResult.textContent = 
    `Square of ${inputNumber} = ${square} | Local + Global = ${localSum}`;
});


// Part 3: JS + CSS Animations

const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  // Re-add the animation class each time for re-trigger
  box.classList.remove("move-animation");
  void box.offsetWidth; // trick to reset animation
  box.classList.add("move-animation");
});
