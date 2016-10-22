function timer() {
    let time, intervalID;
    let startBtn = document.getElementById('start-timer');
    let stopBtn = document.getElementById('stop-timer');

    startBtn.addEventListener('click', function() {
        time = -1;
        incrementTime();
        intervalID = setInterval(incrementTime, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener('click', function() {
        clearInterval(intervalID);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });
    function incrementTime() {
        time++;
        document.getElementById('hours').textContent =
            ("0" + Math.trunc(time / 3600)).slice(-2);

        document.getElementById('minutes').textContent =
            ("0" + Math.trunc((time % 3600)/60)).slice(-2);

        document.getElementById('seconds').textContent =
            ("0" + Math.trunc((time%3600)%60)).slice(-2);
    }
}
