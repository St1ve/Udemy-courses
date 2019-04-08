var score1 = 0;
var score2 = 0;

var h1 = document.querySelector("h1");
var inputMaxScore = document.querySelector("#maxScore");

var maxScore = Number(inputMaxScore.value);

inputMaxScore.addEventListener("change", function() {
  if (maxScore < 1 || maxScore == NaN) {
    maxScore = 5;
  }
  maxScore = Number(inputMaxScore.value);
});

var btPlayer1 = document.querySelector("#bt1");
var btPlayer2 = document.querySelector("#bt2");
var btReset = document.querySelector("#btReset");

var btPlayer1Click = function() {
  if (score1 == maxScore || score2 == maxScore) {
    h1.innerHTML =
      '<span class="winner">' + score1 + "</span>" + " to " + score2;
  } else {
    h1.innerHTML = score1 + " to " + score2;
    score1++;
  }
};

var btPlayer2Click = function() {
  if (score1 == maxScore || score2 == maxScore) {
    h1.innerHTML =
      score1 + " to " + '<span class="winner">' + score2 + "</span>";
  } else {
    h1.innerHTML = score1 + " to " + score2;
    score2++;
  }
};

function reset() {
  score1 = 0;
  score2 = 0;
  h1.textContent = 0 + " to " + 0;
}

btPlayer1.addEventListener("click", btPlayer1Click);
btPlayer2.addEventListener("click", btPlayer2Click);
btReset.addEventListener("click", reset);

h1.innerHTML = score1 + " to " + score2;

console.log(maxScore);
