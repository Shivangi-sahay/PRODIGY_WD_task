let timer;
let isRunning = false;
let time = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
        document.getElementById('lapReset').textContent = 'Lap';
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('startStop').textContent = 'Stop';
        document.getElementById('lapReset').textContent = 'Lap';
        isRunning = true;
    }
}

function lapReset() {
    if (isRunning) {
        let lapTime = document.getElementById('display').textContent;
        let lapItem = document.createElement('li');
        lapItem.className = 'lap-item';
        lapItem.textContent = lapTime;
        document.getElementById('laps').appendChild(lapItem);
    } else {
        clearInterval(timer);
        document.getElementById('display').textContent = '00:00:00';
        document.getElementById('startStop').textContent = 'Start';
        document.getElementById('lapReset').textContent = 'Lap';
        isRunning = false;
        time = 0;
        document.getElementById('laps').innerHTML = '';
    }
}

function updateTime() {
    time += 10;
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);
    document.getElementById('display').textContent =
        formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
