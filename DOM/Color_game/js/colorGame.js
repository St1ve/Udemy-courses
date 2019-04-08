var numbersOfSquares = 6;

var colors = generateArrColors(numbersOfSquares);

var squares = document.querySelectorAll(".square");
//Pick random color from array colors
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btReset = document.querySelector("#reset");
var btEasy = document.querySelector("#btEasy");
var btHard = document.querySelector("#btHard");

btEasy.addEventListener("click", function() {
  btHard.classList.remove("selected");
  btEasy.classList.add("selected");
  numbersOfSquares = 3;
  newGame();

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

btHard.addEventListener("click", function() {
  btEasy.classList.remove("selected");
  btHard.classList.add("selected");
  numbersOfSquares = 6;
  newGame();

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    squares[i].style.opacity = 1;
  }
});

btReset.addEventListener("click", function() {
  newGame();

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.opacity = 1;
    squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listener
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare colore to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      btReset.textContent = "Play again?";
      h1.style.backgroundColor = pickedColor;
      changeColors(clickedColor);
    } else {
      this.style.opacity = 0;
      messageDisplay.textContent = "Wrong! Try agai <3";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    squares[i].style.opacity = 1;
  }
}

function pickRandomColor() {
  var random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

function generateArrColors(numbersOfColors) {
  var arr = [];

  for (var i = 0; i < numbersOfColors; i++) {
    arr.push(generateRandomColor());
  }

  return arr;
}

function generateRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function newGame() {
  colors = generateArrColors(numbersOfSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  btReset.textContent = "New Colors";
  messageDisplay.textContent = "";
}
