function magic_Matrix(input) {

    let matrix = [];
    for (let r = 0; r < input.length; r++) {
        let line = input[r].split(' ').map(Number);
        matrix.push(line);
    }
    let sum = matrix[0].reduce((a, b) => (a + b));  //сума на първия ред


    if (input.length == 2) { // само при 2x2 матрица е невалдно ако провериш реда няма смисъл да проверяваш колоната
        for (let row = 1; row < matrix.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));
            if (sum != sumRow) {
                return false;
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            let sumCol = 0;
            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }

            if (sumCol != sum) {
                return false;
            }
        }

        return true;
    }
    else {
        for (let row = 1; row <= input.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));

            if (sum != sumRow) { // ака сумата на n ред не съвпада с първия ред
                return false;
            }
            else {
                return true;
            }
        }
    }

}
console.log(magic_Matrix(['4 5 6', '6 5 4', '5 5 5']));
//console.log(magic_Matrix(['11 32 45', '21 0 1', '21 1 1']));
//console.log(magic_Matrix(['1 0 0', '0 0 1', '0 1 0']));
