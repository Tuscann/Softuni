function solve(input) {

    var result = input.slice(0);

    for (var i = input.length - 1; i >= 1; i -= 1) {
        for (var j = 0; j < input[i].length - 2; j += 1) {
            if (input[i][j] === input[i][j + 1] && input[i][j] === input[i][j + 2] && input[i][j] === input[i - 1][j + 1]) {
                result[i] = result[i].substr(0, j) + '***' + result[i].substr(j + 3);
                result[i - 1] = result[i - 1].substr(0, j + 1) + '*' + result[i - 1].substr(j + 2);
            }
        }
    }
    for (var str in result) {
        console.log(result[str]);
    }
}
solve(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);
solve(['aa', 'aaa', 'aaaa', 'aaaaa']);