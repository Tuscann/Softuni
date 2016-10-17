function aza(input) {

    let neighbors = 0;
    let matrix = input.map(row=>row.split(' '));

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                neighbors++;
            }
            if (matrix[row][col] == matrix[row][col + 1]) {
                neighbors++;
            }
            if (row == matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                neighbors++;
            }
        }
    }
    return neighbors;
}
console.log(aza(['test yes yo ho', 'well done yo 6', 'not done yet 5']));