function b(input) {

    let n = Number(input[0]);

    let num = Number(1);
    let string = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (col > 1) {
                string += ' ';
            }
            string += num;
            num++;
            if (num > n) {
                break;
            }
        }
        string += '\n';
        if (num > n) {
            break;
        }
    }
    console.log(string);

}
b(['7']);