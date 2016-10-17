function square(input) {

    [n] = input.map(Number);

    let total = '';

    for (row = 0; row < n; row++) {

        total = total + '*';

        for (col = 0; col < n - 1; col++) {
            total +=  " ".repeat(1) + '*'.repeat(1);
        }
        total = total + '\n';
    }
    console.log(total);
}
square(['2']);