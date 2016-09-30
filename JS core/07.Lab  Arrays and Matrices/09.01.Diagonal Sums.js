function diagonalSums(input) {
    let matrix = [];
    for (let r = 0; r < input.length; r++) {
        let line = input[r].split(' ').map(Number);
        matrix.push(line);
    }

    let leftUp = matrix[matrix.length - 1][0];  // първия член за главния диагонал нагоре ред 3 колона 0
    let leftDown = matrix[0][0];                // първия член за главния диагонал надолу ред 0 колона 0

    for (let row = 0; row < matrix.length - 1; row++) {  //row ==cool
        leftDown += matrix[row + 1][row + 1];
        leftUp += matrix[matrix.length - 1 - 1 - row][row + 1];
        // добави към дясна долу вземи от втори ред първото - вземи първи ред второто - от нулев ред третото
    }
     console.log(leftDown + " " + leftUp);
}

diagonalSums(['3 5 17 5', '-1 7 14 25', '1 -8 89 15','2 -12 456 57']);