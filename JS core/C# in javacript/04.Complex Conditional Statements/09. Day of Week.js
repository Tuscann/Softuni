function week(input) {
    let day = Number(input[0]);

    if (day >= 1 && day <= 7) {
        if (day == 1) {
            console.log('monday');
        }
        else if (day == 2) {
            console.log('tuesday');
        }
        else if (day == 3) {
            console.log('wednesday');
        }
        else if (day == 4) {
            console.log('thursday');
        }
        else if (day == 5) {
            console.log('friday');
        }
        else if (day == 6) {
            console.log('saturday');
        }
        else if (day == 7) {
            console.log('sunday');
        }
    }
    else {
        console.log('Error');
    }
}
week(['1']);
week(['2']);
week(['3']);
week(['4']);
week(['5']);
week(['6']);
week(['7']);
week([23]);
week([-23]);