var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");

var bm = document.getElementById("b_minutes");
var bs = document.getElementById("b_seconds");

//store a reference to a timer variable//
var startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("The Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wm.innerText = 25;
  ws.innerText = "00";
  bm.innerText = 05;
  bs.innerText = "00";

  document.getElementById("counter").innerText = "0";
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

//Start timer  function //
function timer() {
  //work timer count down//
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 1;
    wm.innerText--;
  }
  //break timer count down//
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 0;
      bm.innerText--;
    }
  }

  //increment counter by one when one full cycle is completed//
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    alert("IT'S TIME TO START WORKING...!!!!!");
    wm.innerText = 25;
    ws.innerText = 00;
    bm.innerText = 05;
    bs.innerText = 00;

    document.getElementById("counter").innerText++;
  }
}

//stop timer function//
function stopInterval() {
  clearInterval(startTimer);
}

//to-do list

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
