function leap(input) {

    let year=Number(input[0]);

    let x = (year % 400 == 0)||(year % 4 == 0 && year % 100 != 0);

    if (x == true) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
}
leap(['1999']);
leap(['2000']);
leap(['1900']);
leap(['2016']);