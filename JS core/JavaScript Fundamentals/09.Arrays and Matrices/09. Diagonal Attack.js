function diagonalAttack(matrixRows) {

    let matrix = matrixRows
        .map(row => row.split(' ').map(Number)
        );

    let primarySum = 0;
    let secondarySum = 0;

    for (let r = 0; r < matrix.length; r++) {
        primarySum += matrix[r][r];                           //сумата на първия диагонал
        secondarySum += matrix[r][matrix.length - r - 1];    //сумата на втория диагонал
    }

    if (primarySum == secondarySum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let colum = 0; colum < matrix.length; colum++) {
                if (colum != row && colum != matrix.length - row - 1) {
                    matrix[row][colum] = primarySum;
                }
            }
        }
    }
    return matrix.map(row => row.join(' ')).join('\n');

}
console.log(diagonalAttack(['1 1 1', '1 1 1', '1 1 0']));
