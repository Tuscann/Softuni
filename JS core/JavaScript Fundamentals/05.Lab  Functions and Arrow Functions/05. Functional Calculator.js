function FunctionalCalculator(input) {

    let first = Number(input[0]);
    let secound = Number(input[1]);
    let operator = String(input[2]);


    if (operator == '+') {
        console.log(first + secound);
    }
    else if (operator == '/') {
        console.log(first / secound);
    }
    else if (operator == '*') {
        console.log(first * secound);
    }
    else if (operator == '-') {
        console.log(first - secound);
    }


}
FunctionalCalculator(['2', '4', '+']);
FunctionalCalculator(['3', '3', '/']);
FunctionalCalculator(['18', '-1', '*']);