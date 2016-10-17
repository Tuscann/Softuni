function cook(input) {

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        if (input[i] == 'chop') {
            number = number / 2;
            console.log(number);
        }
        if (input[i] == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        }
        if (input[i] == 'spice') {
            number = number+1;
            console.log(number);
        }
        if (input[i] == 'bake') {
            number = number*3;
            console.log(number);
        }
        if (input[i] == 'fillet') {
            number = 0.8*number;
            console.log(number);
        }
    }
}
// cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cook([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);