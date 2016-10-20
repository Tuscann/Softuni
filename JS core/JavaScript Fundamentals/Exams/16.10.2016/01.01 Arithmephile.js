function main(arr) {
    let maxNumber = Number.NEGATIVE_INFINITY;
    let multiplication = 1;
    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i]);
        if (number < 0 || number >= 10) {
            continue;
        }
        let stop = Math.min(i + 1 + number, arr.length);
        for (let j = i + 1; j < stop; j++) {
            multiplication *= Number(arr[j]);
        }
        if (maxNumber < multiplication)
            maxNumber = multiplication;
        multiplication = 1;
    }
    console.log(maxNumber);
}
main(['100', '200', '2', '3', '2', '3', '2', '1', '1']);