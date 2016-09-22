function price(input) {
    let movie = String(input[0]).toLowerCase();
    let day = String(input[1]).toLowerCase();

    let price = 0;
    if (day == "monday") {
        if (movie == "the godfather") {
            console.log("12");
        }
        else if (movie == "schindler's list") {
            console.log("8.50");
        }
        else if (movie == 'casablanca') {
            console.log(8);
        }
        else if (movie == 'the wizard of oz') {
            console.log(10);
        }
        else{
            console.log("error");
        }
    }
    else if (day == 'tuesday') {
        if (movie == 'the godfather') {
            console.log(10);
        }
        else if (movie == "schindler's list") {
            console.log(8.5);
        }
        else if (movie == 'casablanca') {
            console.log(8);
        }
        else if (movie == 'the wizard of oz') {
            console.log(10);
        }
        else{
            console.log("eror");
        }
    }
    else if (day == 'wednesday') {
        if (movie == 'the godfather') {
            console.log(15);
        }
        else if (movie == "schindler's list") {
            console.log(18.5);
        }
        else if (movie == 'casablanca') {
            console.log(8);
        }
        else if (movie == 'the wizard of oz') {
            console.log(10);
        }
        else{
            console.log("error");
        }
    }
    else if (day == 'thursday') {
        if (movie == 'the godfather') {
            console.log(12.5);
        }
        else if (movie == "schindler's list") {
            console.log(8.5);
        }
        else if (movie == 'casablanca') {
            console.log(8);
        }
        else if (movie == 'the wizard of oz') {
            console.log(10);
        }
        else{
            console.log("error");
        }
    }
    else if (day == 'friday') {
        if (movie == 'the godfather') {
            console.log(15);
        }
        else if (movie == "schindler's list") {
            console.log(8.5);
        }
        else if (movie == 'casablanca') {
            console.log(8);
        }
        else if (movie == 'the wizard of oz') {
            console.log(10);
        }
        else{
            console.log("error");
        }
    }
    else if (day == 'saturday') {
        if (movie == 'the godfather') {
            console.log(25);
        }
        else if (movie == "schindler's list") {
            console.log(15);
        }
        else if (movie == 'casablanca') {
            console.log(10);
        }
        else if (movie == 'the wizard of oz') {
            console.log(15);
        }
        else{
            console.log("error");
        }
    }
    else if (day == 'sunday') {
        if (movie == 'the godfather') {
            console.log(30);
        }
        else if (movie == "schindler's list") {
            console.log(15);
        }
        else if (movie == 'casablanca') {
            console.log(10);
        }
        else if (movie == 'the wizard of oz') {
            console.log(15);
        }
        else{
            console.log("error");
        }
    }
    else{
        console.log("error");
    }
}
price(["The Godfather", "Monday"]);
price(["casablanca", "Monday"]);
price(["The Godfather", "Friday"]);
price(['casablanca', 'sunday']);
price(["Schindler's LIST", 'sunday']);
price(['SoftUni', 'Nineday']);
price(['THE GODFATHER', 'SUNDAY']);


