function week(input) {

    let day = String(input[0]);
    let x = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (x.indexOf(day) >= 1 && x.indexOf(day) <= 7) {
        console.log(x.indexOf(day));
    }
    else{
        console.log('error');
    }

}
week(['Monday']);
week(['Friday']);
week(['aaFridaysasa']);