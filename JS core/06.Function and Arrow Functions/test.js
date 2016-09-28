function solve(input) {

    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    function calcDistance(a1, b1, a2, b2) {
        let dist = Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1));
        return dist;
    }

    function isValid(a, b, c, d) {
        if (calcDistance(a, b, c, d) === parseInt(calcDistance(a, b, c, d), 10)) {
            return `{` + a + `, ` + b + `} to {` + c + `, ` + d + `} is valid`;
        }
        return `{` + a + `, ` + b + `} to {` + c + `, ` + d + `} is invalid`;
    }

    console.log(isValid(x1, y1, 0, 0));
    console.log(isValid(x2, y2, 0, 0));
    console.log(isValid(x1, y1, x2, y2));
}
solve(['3','0','0','4']);