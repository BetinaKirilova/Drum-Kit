//Detecting buttons clicked
var arr = document.getElementsByClassName("drum");
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    checkKey(buttonInnerHtml);
    buttonPressed(buttonInnerHtml);
  });
}

//Detecting key press
document.addEventListener("keydown", function (event) {
  checkKey(event.key);
  buttonPressed(event.key);
});

function checkKey(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Loser");
      break;
  }
}

function buttonPressed(btn) {
  var activeBtn = document.querySelector("." + btn);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
