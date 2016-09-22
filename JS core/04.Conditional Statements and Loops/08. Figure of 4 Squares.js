function draw4Squares(input) {
    let size = Number(input[0]);
    let horizontal = size * 2 - 1;
    let vertical = (size % 2 == 0) ? size - 1 : size;
    let result = "";
    for (let r = 1; r <= vertical; r++) {
        for (let c = 1; c <= horizontal; c++) {
            if (r == 1 || r == Math.ceil(vertical / 2) || r == vertical){
                result += (c == 1 || c == size || c == horizontal) ? '+' : '-';
            }
            else{
                result += (c == 1 || c == size || c == horizontal) ? '|' : ' ';
            }
        }
        result += '\n';
    }
    console.log(result);
}