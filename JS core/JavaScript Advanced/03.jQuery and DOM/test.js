function timer(){
    let time,timer;
    let buttonStart =document.getElementById('start-timer');
    let buttonEnd =document.getElementById('stop-timer');

    buttonStart.addEventListener('click',function () {
        time =0;
        timer = setInterval(step,1000);
        buttonStart.disabled=true;
        buttonEnd.disabled=false;
    });
    buttonEnd.addEventListener('click',function () {
        clearInterval(timer);
        buttonEnd.disabled=true;
        buttonStart.disabled=false;
    });


    function step(){
        time++;
        $('#hours').text(('0'+Math.floor(time/3600)).slice(-2))
        $('#minutes').text(('0'+Math.floor(time/60)).slice(-2))
        $('#seconds').text(('0'+Math.floor(time%60)).slice(-2))
    }

}