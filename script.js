//

let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

//startStop Button
function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("pauseResume").innerText = "Pause";
    document.getElementById("pauseResume").disabled = true;
    document.getElementById("smashCode").classList.remove("smash");
  } else {
    timer = setInterval(updateTimer, 10);
    document.getElementById("startStop").innerText = "Stop";
    document.getElementById("pauseResume").disabled = false;
    document.getElementById("smashCode").classList.add("smash");
  }
  isRunning = !isRunning;
}

//pause Button
function pauseResume() {
  if (timer) {
    if (isRunning) {
      clearInterval(timer);
      document.getElementById("pauseResume").innerText = "Resume";
    } else {
      timer = setInterval(updateTimer, 10);
      document.getElementById("pauseResume").innerText = "Pause";
    }
    isRunning = !isRunning;
  }
}
//reset Button
function reset() {
  clearInterval(timer);
  document.getElementById("display").innerText = "00:00:000";
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isRunning = false;
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("pauseResume").innerText = "Pause";
  document.getElementById("pauseResume").disabled = true;
  document.getElementById("smashCode").classList.remove("smash"); // Resetting class on reset
}

function updateTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("display").innerText =
    padNumber(minutes) +
    ":" +
    padNumber(seconds) +
    ":" +
    padNumber(milliseconds);
}

function padNumber(number) {
  return number < 10 ? "0" + number : number;
}
