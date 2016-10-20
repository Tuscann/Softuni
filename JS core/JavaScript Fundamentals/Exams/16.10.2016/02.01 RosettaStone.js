function solve(input) {
    let n = Number(input.shift());
    let code = [];
    for (let i = 0; i < n; i++) {
        code.push(input.shift().split(' ').map(Number));
    }
    let matrix = [];
    for (let row of input) {
        matrix.push(row.split(' ').map(Number));
    }
    let result = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col< matrix[0].length; col++) {
            let current = matrix[row][col];
            let modifier = code[row % code.length][col % code[0].length];
            result += String.fromCharCode(((current + modifier) % 27) + 64);
        }
    }
    result = result.replace(/@/g, ' ');
    console.log(result);
}
solve(
    ['1',
        '1 3 13',
        '12 22 14 13 25 0 4 24 23',
        '18 24 2 25 22 0 0 11 18',
        '8 25 6 26 8 23 13 4 14',
        '14 3 14 10 6 1 6 16 14',
        '11 12 2 10 24 2 13 24 0',
        '24 24 10 14 15 25 18 24 12',
        '4 24 0 8 4 22 19 22 14',
        '0 11 18 26 1 19 18 13 15',
        '8 15 14 26 24 14 26 24 14']
);