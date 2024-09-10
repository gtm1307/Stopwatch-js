// Variables to store time values
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

// Function to update the display
function updateDisplay() {
    const display = document.getElementById("display");
    const formatTime = (time) => time < 10 ? `0${time}` : time;
    display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to run the timer
function startTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

// Start/Pause Button Click Handler
document.getElementById("startPauseBtn").addEventListener("click", function () {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        this.innerText = "Start";
        this.classList.remove("btn-warning");
        this.classList.add("btn-success");
    } else {
        interval = setInterval(startTimer, 1000);
        isRunning = true;
        this.innerText = "Pause";
        this.classList.remove("btn-success");
        this.classList.add("btn-warning");
    }
});

// Stop Button Click Handler
document.getElementById("stopBtn").addEventListener("click", function () {
    clearInterval(interval);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.getElementById("startPauseBtn").innerText = "Start";
    document.getElementById("startPauseBtn").classList.remove("btn-warning");
    document.getElementById("startPauseBtn").classList.add("btn-success");
});
