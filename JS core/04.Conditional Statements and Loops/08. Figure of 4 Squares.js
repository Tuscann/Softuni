function figure(input) {
    let n = Number(input[0]);
    let counter = parseInt(((2 * n) - 3) / 2);
    // let counter = n - 2;

    if (n % 2 == 0) {//четни
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < parseInt((n - 3) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < parseInt((n - 3) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
    }
    else {// нечетни
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < ((n - 4) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
        for (i = 0; i < ((n - 4) / 2); i++) {
            console.log('|' + " ".repeat(counter) + '|' + " ".repeat(n - 2) + '|');
        }
        console.log("+" + "-".repeat(counter) + "+" + '-'.repeat(counter) + '+');
    }
}
figure(['2']);