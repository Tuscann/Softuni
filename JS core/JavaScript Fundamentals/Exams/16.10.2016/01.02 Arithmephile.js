function main(input) {
    let arr = input.map(Number);
    let maxNum = -1000000000;
    let multiple = 1;
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i];
        if (s >= 0 && s < 10) {
            for (let k = i + 1; k <= i + s; k++) {
                multiple *= arr[k];
            }
            if (multiple > maxNum) {
                maxNum = multiple;
            }
            multiple = 1;
        }
    }
    console.log(maxNum);
}
main(['100', '200', '2', '3', '2', '3', '2', '1', '1']);