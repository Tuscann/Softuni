function timer() {
    let secondsElement = $('#seconds');
    let minutesElement = $('#minutes');
    let hoursElement = $('#hours');

    let startButton = $('#start-timer');
    let stopButton = $('#stop-timer');
    let interval = undefined;

    startButton.click(function () {
        if (!interval) {
            interval = setInterval(step, 1000);
        }
    });
    stopButton.click(function () {
        clearInterval(interval);
        interval = undefined;
    });

    let totalSeconds = 0;

    function step() {
        totalSeconds++;
        secondsElement.text(pad(Math.floor(totalSeconds % 60)));
        let mins = totalSeconds / 60;
        minutesElement.text(pad(Math.floor(mins % 60)));
        let hours = totalSeconds / 3600;
        hoursElement.text(pad(Math.floor(hours)));
    }
    function pad(num) {
        if (num <= 9) {
            num = `0${num}`;
        }
        return num;
    }
}