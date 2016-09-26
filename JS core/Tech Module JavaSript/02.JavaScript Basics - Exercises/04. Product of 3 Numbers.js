function MultiplyTwoNumbers(input) {
    let first = Number(input[0]);
    let secound = Number(input[1]);
    let three = Number(input[2]);

    let counter = 0;
    if (first < 0) {
        counter++;
    }
    if (secound < 0) {
        counter++;
    }
    if (three < 0) {
        counter++;
    }

    if (counter == 0||counter==2) {
        console.log('Positive');
    }
    else if (counter == 1||counter == 3) {
        console.log('Negative');
    }

}
// MultiplyTwoNumbers(['2', '3', '-1']);
 MultiplyTwoNumbers(['5', '4', '3']);
// MultiplyTwoNumbers(['-13', '-13', '12']);
// MultiplyTwoNumbers(['5', '4', '3']);
// MultiplyTwoNumbers(['-10', '-50', '-23']);
// MultiplyTwoNumbers(['3', '2']);
// MultiplyTwoNumbers(['144', '12']);
// MultiplyTwoNumbers(['1', '0']);
// MultiplyTwoNumbers(['0', '0', '0']);
// MultiplyTwoNumbers(['0', '1']);