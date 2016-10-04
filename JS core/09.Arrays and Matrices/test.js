function matrix(input) {
    let matrix = input.map(row => row.trim());
    let sum = input[0].split('').map(Number).reduce((a, b) => a + b, 0);

    // console.log(sum);
    for (let row = 1; row < input.length; row++) {
        let rowSum = matrix[row].split('').map(Number).reduce((a, b) => a + b, 0);
        let colSum = 0;
        for (let col = 0; col < matrix[1].length; col++) {
            colSum += Number(matrix[row][col]);
        }
        if (sum != rowSum) {
            return false;
        }
        if (sum != colSum) {
            return false;
        }
    }
    return true
}
console.log(matrix(['4 5 6', '6 5 4 ', '5 5 5']));