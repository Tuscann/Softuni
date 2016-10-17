function a(input) {

    let matrix = [];
    for (let r = 0; r < input.length - 1; r++) {
        let line = input[r].split(' ').map(Number);
        matrix.push(line);
    }
    let x = input.pop().split(',');
    let bombRow = Number(x[0]);
    let bombColumn = Number(x[1]);
    console.log(matrix);

    let bombExplode = matrix[bombRow][bombColumn];

    let bunnyDamage = 0;
    let bunnyKills = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row != bombRow || col != bombColumn) {

            }
        }
    }


}
a(['10 10 10', '10 10 10', '10 10 10', '0,0']);