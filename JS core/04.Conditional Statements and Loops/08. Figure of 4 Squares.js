function figure(input) {
    let n = Number(input[0]);
    let counter = (n - 2);

    let dash = '-';
    let char = '|';
    let plus = '+';

    if (n == 2) {
        console.log(plus + plus + plus);
    }
    else {

        if (n % 2 == 0) {//четни
            console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
            for (i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
            for (i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        }
        else {// нечетни
            console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
            for (i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
            for (i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        }
    }
}
figure('3');