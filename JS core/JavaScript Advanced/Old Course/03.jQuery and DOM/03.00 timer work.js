function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let seconds = 0;

    startBtn.on("click", function (e) {
        clearInterval(timer);
        seconds = 0;
        timer = setInterval(step, 1000);
    });

    stopBtn.on("click", function (e) {
        clearInterval(timer);
        seconds = 0;
        $("#seconds")[0].textContent = "00";
        $("#minutes")[0].textContent = "00";
        $("#hours")[0].textContent = "00";
    });

    function step() {
        seconds++;
        if (seconds % 60 < 10) {
            $("#seconds")[0].textContent = "0" + parseInt(seconds % 60);
        }
        else {
            $("#seconds")[0].textContent = parseInt(seconds % 60);
        }
        if (seconds < 360) {
            $("#minutes")[0].textContent = "0" + parseInt(seconds / 60 % 60);
        }
        else {
            $("#minutes")[0].textContent = parseInt(seconds / 60 % 60);
        }
        if (seconds < 36000) {
            $("#hours")[0].textContent = "0" + parseInt(seconds / 3600 % 24);
            if (seconds / 36000 % 60 < 10) {
                $("#minutes")[0].textContent = "0" + parseInt(seconds / 60 % 60);
            }
        }
        else {
            $("#hours")[0].textContent = parseInt(seconds / 3600 % 24);
        }
    }
}