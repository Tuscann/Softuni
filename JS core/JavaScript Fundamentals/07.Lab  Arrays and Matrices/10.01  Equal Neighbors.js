function aza(input) {
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');
        matrix.push(line);
    }

    //напълнихме матрицата от числа

    let checkRight = function (matrix, r, c) {
        if (matrix[r][c] === matrix[r][c + 1]) {
            return 1;
        }
        return 0;
    };
    let checkDown = function (matrix, r, c) {
        if (matrix[r][c] === matrix[r + 1][c]) {
            return 1;
        }
        return 0;
    };


    let count = 0;
    for (let r = 0; r <= matrix.length - 1; r++) {
        for (let c = 0; c <= matrix[r].length - 1; c++) {
            // not last col
            if (c < matrix[r].length - 1) {
                count += checkRight(matrix, r, c);
            }
            // not last row
            if (r < matrix.length - 1) {
                count += checkDown(matrix, r, c);
            }
            // last col
            if (c === matrix[r].length){
                if (r < matrix.length){
                    count += checkDown(matrix, r, c);
                }
            }
            // last row
            if (r === matrix.length){
                if (c < matrix[r].length){
                    count += checkRight(matrix, r, c);
                }
            }
        }
    }
    console.log(count);
}

// aza(['2 2 5 7 4', '4 0 5 3 4', '2 5 5 4 2']);
// aza(['2 3 4 7 0', '4 0 5 3 4', '2 3 5 4 2', '9 8 7 5 4']);
// aza(['2 2 5 7 4', '4 0 5 3 4', '2 5 5 4 2']);
// aza(['2 2 5 7 4', '4 0 5 3 4', '2 5 5 4 2']);
aza(['test yes yo ho', 'well done yo 6', 'not done yet 5' ]);