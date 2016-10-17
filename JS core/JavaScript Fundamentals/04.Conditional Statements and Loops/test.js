function draw4Squares(input) {
    let n = Number(input[0]);
    let horizontal = 2 * n - 1;
    let vertical = (n % 2 == 0) ? n - 1 : n;
    let result = "";
    if (n == 2) {
        for ( i = 0; i < 3; i++)
        {
            console.log("+".repeat(3));
        }
    }
    else {
        for (let r = 1; r <= vertical; r++) {
            for (let c = 1; c <= horizontal; c++) {
                if (r == 1 || r == Math.ceil(vertical / 2) || r == vertical) {
                    result += (c == 1 || c == n || c == horizontal) ? '+' : '-';
                }
                else {
                    result += (c == 1 || c == n || c == horizontal) ? '|' : ' ';
                }
            }
            result += '\n';
        }
    }
    console.log(result);
}
draw4Squares([2]);