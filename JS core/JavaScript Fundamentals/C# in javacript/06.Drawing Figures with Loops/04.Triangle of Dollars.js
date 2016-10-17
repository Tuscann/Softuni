function dolar(input) {
    let n = Number(input[0]);

    let total = "";

    for (let row = 0; row < n; row++) {
        total = total + "$";
        for (let col = 0; col < row; col++) {
            total +=" " + "$";
        }
        total += "\n";
    }
    console.log(total);


    // for (col = 0; col < n - 1; col++) {
    //     total = total + " ".repeat(1) + '$'.repeat(1);
    // }
    // total = total + '\n';

}


dolar(['2']);