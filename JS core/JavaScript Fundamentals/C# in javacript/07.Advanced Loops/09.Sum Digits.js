function x(input) {

    let number = Number(input[0]);

    sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(sum);
}
x(['5634']);