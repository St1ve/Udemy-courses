// alert("Connected")

var body = document.querySelector("body");
var button = document.querySelector("#btChangeBG");

var changeBackground = function() {
  body.classList.toggle("bg");
};

button.addEventListener("click", changeBackground);
