readInput();

function readInput() {
    var input = [
        'puoUdai',
        'miU',
        'ausupirina',
        '8n8i8',
        'm8o8a',
        '8l8o860',
        'M8i8',
        '8e8!8?!'
    ];

    solve(input);
}


function solve(input) {
    var selectedFields = [];
    for (var row = 0; row < input.length; row++) {
        selectedFields.push([]);
        for (var col = 0; col < input[row].length; col++) {
            selectedFields[row].push(true);
        }
    }

    for (row = 0; row < input.length; row++) {
        for (col = 0; col < input[row].length; col++) {
            if (row + 2 < input.length &&
                col + 2 < input[row].length &&
                col + 1 < input[row + 1].length &&
                col + 2 < input[row + 2].length &&
                isX(input, row, col)) {

                selectedFields[row][col] = false;
                selectedFields[row][col + 2] = false;
                selectedFields[row + 1][col + 1] = false;
                selectedFields[row + 2][col] = false;
                selectedFields[row + 2][col + 2] = false;
            }
        }
    }

    var output = "";

    for (row = 0; row < input.length; row++) {
        for (col = 0; col < input[row].length; col++) {
            if (selectedFields[row][col]) {
                output += input[row][col];
            }
        }
        output += '\n';
    }

    console.log(output);

    function isX(input, row, col) {
        var charToCheck = input[row][col].toLowerCase();

        if (input[row][col + 2].toLowerCase() === charToCheck &&
            input[row + 1][col + 1].toLowerCase() === charToCheck &&
            input[row + 2][col].toLowerCase() === charToCheck &&
            input[row + 2][col + 2].toLowerCase() === charToCheck) {

            return true;
        }

        return false;
    }
}