function sum(input) {
    let digits = input.map(parseFloat);

    let left = digits.splice(1, (digits.length - 1) / 2);
    let sumleft = left.reduce((a, b)=> a + b);
    // console.log(digits);

    let right = digits.splice(1, digits[0]);
    let rightsum = 0;
    for (let i in right) {
        rightsum += right[number];
    }
    if (sumleft == rightsum) {
        console.log('yes sum ' + sumleft);
    }
    else {
        console.log('no diff ' + Math.abs(rightsum - sumleft));
    }
}
// sum(['1', '1', '1']);
sum(['10', '1', '2','3', '4', '5','6', '7', '8','9','10','1', '2','3', '4', '5','6', '7', '8','9','10']);
// sum(['2', '10', '90', '60', '40']);
// sum(['2','90','9', '50', '50']);