function half(input) {
    let digits = input.map(parseFloat);
    let real = digits.splice(0, 1);

    var max = Math.max.apply(null, digits);
    let sum = digits.reduce((a, b)=> a + b);

    if (max == sum - max) {
        console.log('Yes Sum = ' + max);
    }
    else {
        console.log('No Diff = ' + Math.abs(2*max - sum ));
    }
}
// half(['4', '6', '1', '2', '3']);
// half(['7', '3', '4', '1', '1','2','12','1']);
// half(['3', '1', '1', '10']);
// half(['3','5','5','1']);
half(['3','1','1','1']);