function pair(input) {
    let digits = input.map(parseFloat);
    let n = digits.splice(0, 1);
    console.log(digits);

    let cuuurentSum = Number(0);
    let previousSum = Number(0);
    let diff = 0;
    let maxDiff = 0;
    for (number = 0; number < n; number++) {
        previousSum = cuuurentSum;
        cuuurentSum = 0;
        cuuurentSum += Number(digits.splice(0, 1));
        console.log(cuuurentSum);
        cuuurentSum += Number(digits.splice(0, 1));
        console.log(cuuurentSum);
        if (number != 0) {
            diff = Math.abs(cuuurentSum - previousSum);
            if (diff != 0 && diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    if (previousSum == cuuurentSum || n == 1) {
        console.log("Yes, value=" + cuuurentSum);
    }
    else {
        console.log("No, maxdiff=" + maxDiff);
    }
}
pair(['2', '1', '2', '0', '3']);
pair(['1', '5', '5']);