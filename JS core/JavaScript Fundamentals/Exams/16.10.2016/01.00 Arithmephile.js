function task1(ivan) {
    let input = ivan.map(Number);

    let sum = -2000000;
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 10) {
            let n = input[i];
            let tempSum = 1;

            if (n != 0) {
                for (let j = i + 1; j <= i + n && j < input.length; j++) {
                    tempSum *= input[j];
                }
                if ((tempSum > sum)&&(tempSum != 1)) {
                    sum = tempSum;
                }
            }
        }
    }
    console.log(sum);
}
task1(["10", "20", "2", "30", "44", "123", "3", "56", "20", "24"]);