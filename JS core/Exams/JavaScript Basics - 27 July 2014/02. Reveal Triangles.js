function a(input) {

    var output = [];
    for (var row = 0; row < input.length; row++) {
        output[row] = input[row].split('');  // прави текстова матрица
    }

    for (let row = 1; row < input.length; row++) {
        var maxCol = Math.min(input[row - 1].length - 2, input[row].length - 3);

        for (var col = 0; col <= maxCol; col++) {
            var d = input[row - 1][col + 1];  // горния ред по средата върха на триъгълника
            var a = input[row][col];
            var b = input[row][col + 1];
            var c = input[row][col + 2];

            if (a == b && b == c && c == d) {
                output[row][col] = '*';
                output[row][col + 1] = '*';
                output[row][col + 2] = '*';
                output[row - 1][col + 1] = '*';
            }
        }
    }
    for (var rows = 0; rows < input.length; rows++) {
        console.log(output[rows].join(''));
    }
}
//a(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);
// a(['aa', 'aaa', 'aaaa', 'aaaaa']);
// a(['ax', 'xxx', 'b', 'bbb', 'bbbb']);
// a([ 'dffdsgyefg','ffffeyeee','jbfffays','dagfffdsss','dfdfa','dadaaadddf','sdaaaaa','daaaaaaasf']);