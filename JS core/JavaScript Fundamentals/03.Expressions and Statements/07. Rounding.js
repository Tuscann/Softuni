function Round(input) {
    let number = Number(input[0]);
    let precision = Number(input[1]);

    if (precision > 15) {
        precision = 15;
    }
    let x = number.toFixed(precision);
    console.log(parseFloat(x)); /* премахва излишните нулите */

}
Round([3.1415926535897932384626433832795, 2]);
Round([10.500000000000000000, 3]);