function solev(input) {

    let n = Number(input[0]);
    let str = "";

    for (row = 0; row < n; row++) {
        str += '*';
        for (col = 0; col < row; col++) {
            str += "*";
        }
        str += '\n'
    }
    for (row = 0; row < n; row++) {
        for (col = 0; col < n - row - 1; col++) {
            str = str + "*";
        }
        str += "\n"
    }
    console.log(str);
}
solev(['3']);