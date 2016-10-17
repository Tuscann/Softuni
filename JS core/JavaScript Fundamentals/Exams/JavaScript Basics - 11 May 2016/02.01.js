function bunnyKill(input) {
    let [bombs, matrix] = [input.pop().split(/[\s,]+/g).map(Number), input.map(l => l.split(/\s+/g).map(Number))];
    let bunnyDamage = 0;
    let bunnyKills = 0;

    function doDamageOnNearBunnies(bombRow, bombCol, damage) {
        for (let row = Math.max(0, bombRow - 1); row <= Math.min(matrix.length - 1, bombRow + 1); row++) {
            for (let col = Math.max(0, bombCol - 1); col <= Math.min(matrix[row].length - 1, bombCol + 1); col++) {
                if (row != bombRow || col != bombCol) {
                    matrix[row][col] -= damage;
                    if (matrix[row][col] < 0)
                        matrix[row][col] = 0;
                }
            }
        }
    }

    for (let i = 0; i < bombs.length; i += 2) {
        let row = bombs[i];
        let col = bombs[i + 1];

        if (matrix[row][col] > 0) {
            bunnyDamage += matrix[row][col];
            bunnyKills++;
            doDamageOnNearBunnies(row, col, matrix[row][col]);
            matrix[row][col] = 0;
        }
    }
    matrix.map(r => bunnyDamage += r.reduce((a, b) => a + b));
    matrix.map(r => bunnyKills += r.filter(sr => sr > 0).length);

    console.log(bunnyDamage);
    console.log(bunnyKills);
}

bunnyKill(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1']);

bunnyKill(
    ['10 10 10',
        '10 10 10',
        '10 10 10',
        '0,0']);