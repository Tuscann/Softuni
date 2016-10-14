function xRemoval(data) {
    let matrix = data.map(e => e.split(''));
    let matches = matrix.map(r => r.map(e => false));
    // console.log(matrix);
    // console.log(matches);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentCell = matrix[row][col].toLowerCase();
            if (isValidCell(row, col + 2) && matrix[row][col + 2].toLowerCase() == currentCell &&
                isValidCell(row + 1, col + 1) && matrix[row + 1][col + 1].toLowerCase() == currentCell &&
                isValidCell(row + 2, col) && matrix[row + 2][col].toLowerCase() == currentCell &&
                isValidCell(row + 2, col + 2) && matrix[row + 2][col + 2].toLowerCase() == currentCell) {
                matches[row][col] = true;
                matches[row][col + 2] = true;
                matches[row + 1][col + 1] = true;
                matches[row + 2][col] = true;
                matches[row + 2][col + 2] = true;
            }
        }
    }
    for (let row = 0; row < matches.length; row++) {
        for (let col = 0; col < matches[row].length; col++) {
            if (matches[row][col]) {
                matrix[row][col] = undefined;
            }
        }
    }

    let output = matrix.map(r => r.filter(e => e != undefined)).map(e => e.join('')).join('\n');
    console.log(output);

    function isValidCell(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}

xRemoval(["puoUdai", "miU", "ausupirina", "8n8i8", "m8o8a", "8l8o860", "M8i8", "8e8!8?!"]);