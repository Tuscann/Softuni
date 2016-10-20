function rosettaStone(input) {
    let n = Number(input[0].trim());
    let template = [];
    let encodedMatrix = [];
    let resultStr = '';

    let decrStone = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 1; i <= n; i++) {
        let currentRow = input[i].split(' ').map(x => Number(x.trim()));
        template.push(currentRow);
    }

    for (let i = n + 1; i < input.length; i++) {
        let currentRow = input[i].split(' ').map(x => Number(x.trim()));
        encodedMatrix.push(currentRow);
    }

    for (let i = 0; i < encodedMatrix.length; i++) {
        for (let j = 0; j < encodedMatrix[i].length; j++) {

            let resultNum = encodedMatrix[i][j] + template[i % n][j % template[j % n].length];
            let decodedNum = resultNum % 27;
            resultStr += decrStone[decodedNum];
        }
    }
    console.log(resultStr);
}
rosettaStone(
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