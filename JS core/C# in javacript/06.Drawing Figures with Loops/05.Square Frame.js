function frame(input) {

    let n=Number(input[0]);

    let total = '';
    total += '+' + ' ';
    for (number = 0; number < n - 2; number++) {
        total += '-'.repeat(1) + " ".repeat(1);
    }
    total += '+' + '\n';
    for (row = 1; row < n - 1; row++) {
        total = total + '|' + " ";
        for (col = 0; col < n - 2; col++) {
            total += '-'.repeat(1) + " ".repeat(1);
        }
        total = total + '|' + '\n';
    }
    total += '+' + ' ';
    for (number = 0; number < n - 2; number++) {
        total += '-'.repeat(1) + " ".repeat(1);
    }
    total += '+' + '\n';
    console.log(total);

}
frame([4]);