function test(colums, comands) {

    let matrix = [];
    for (let r = 0; r < colums.length; r++) {
        let line = colums[r].split(' ').map(Number);
        matrix.push(line);
    }

    for (var i = 0; i < comands.length; i++) {
        let first = comands[i].split(' ');

        let command = first[0];
        let index = parseInt(first[1]);

        if (command === "breeze") {
            for (var j = 0; j < 5; j++) {
                for (var k = 0; k < 5; k++) {
                    if (j === index) {
                        matrix[j][k] = matrix[j][k] - 15;
                        if (matrix[j][k] < 0) {
                            matrix[j][k] = 0;
                        }
                    }
                }
            }
        }
        else if (command === "gale") {
            for (let j1 = 0; j1 < 5; j1++) {
                for (let k1 = 0; k1 < 5; k1++) {
                    if (k1 === index) {
                        matrix[j1][k1] = matrix[j1][k1] - 20;
                        if (matrix[j1][k1] < 0) {
                            matrix[j1][k1] = 0;
                        }
                    }
                }
            }
        }
        else if (command === "smog") {
            for (let f = 0; f < 5; f++) {
                for (let z = 0; z < 5; z++) {
                    matrix[f][z] = matrix[f][z] + index;
                }
            }
        }
    }
    let counter = 0;
    let print = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                print.push(row);
                print.push(col);
                counter++;
            }
        }
    }
    if (counter > 0) {

        let str = "";
        for (let da = 0; da < print.length; da += 2) {
            str += '[' + print[da] + '-' + print[da + 1] + '], ';
        }
        str = str.slice(0, -2);
        console.log("Polluted areas: " + str)

    } else {
        console.log("No polluted areas");
    }
}

test([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
test([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);
test([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);