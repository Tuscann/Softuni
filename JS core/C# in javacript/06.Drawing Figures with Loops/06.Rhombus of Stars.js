function n(input) {
    let side = Number(input[0]);

    let print = '';
    for (row = 0; row < side; row++) {
        print += ' '.repeat(side - row - 1);
        let count = '';
        for (number = 0; number <= row; number++) {
            count += '*' + ' ';
        }
        print += print +'*'+'\n';
    }
    console.log(print);
}
n([3]);