function sum(input) {

    let n = Number(input[0]);
    let total = 0;

    if (n >= 1) {
        for (let i = 1; number <= n; number++) {
            total = total + Number(input[number]);
        }
    }
    console.log(total);
}
sum(['0']);
sum([2, 10, 20]);
sum([3, -10, -20, -30]);
sum(['4', '45', '-20', '7', '11']);
