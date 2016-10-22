function a() {
    let timeElapsed, timer;
    let stopBtn = document.getElementById('stopBtn');
    let startBtn = document.getElementById('startBtn');
    stopBtn.addEventListener('click', function () {
        clearInterval(timer);
        toggleButtons();
    });
    startBtn.addEventListener('click', function () {
        document.getElementById('time').textContent = '00:00';
        timeElapsed = 0;
        timer = window.setInterval(incrementTime, 1000);
        toggleButtons();
    });
    function incrementTime() {
        timeElapsed++;
        let minutes = ('0' + Math.trunc(timeElapsed / 60)).slice(-2);
        let seconds = ('0' + Math.trunc(timeElapsed % 60)).slice(-2);
        document.getElementById('time').textContent = minutes + ':' + seconds;
    }
    function toggleButtons() {
        startBtn.disabled = !startBtn.disabled;
        stopBtn.disabled = !stopBtn.disabled;
    }
}