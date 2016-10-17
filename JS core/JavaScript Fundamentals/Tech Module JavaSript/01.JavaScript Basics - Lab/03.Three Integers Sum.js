function three(input) {
    let num = input[0].split(' ').map(Number);

    let ones = num[0];
    let two = num[1];
    let three = num[2];

    if (ones + two == three) {
        console.log(Math.min(ones, two) + ' + ' + Math.max(ones, two) + ' = ' + three);
    }
    else if (ones + three == two) {
        console.log(Math.min(ones, three) + ' + ' + Math.max(ones, three) + ' = ' + two);
    }
    else if (two + three == ones) {

        console.log(Math.min(two, three) + ' + ' + Math.max(two, three) + ' = ' + ones);
    }
    else {
        console.log('No');
    }
}
// three(['15 5 20']);
//three(['8 15 7']);
// three(['0 0 0']);
// three(['-30 -10 -20']);