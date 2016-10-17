function aza(input) {

    let x1 = parseInt(input[0]);
    let y1 = parseInt(input[1]);
    let x2 = parseInt(input[2]);
    let y2 = parseInt(input[3]);


    if (isNaN(x1) == true || isNaN(x2) == true || isNaN(y1) == true || isNaN(y2) == true) {
        console.log('{' + x1 + ', ' + x2 + '} to {0, 0} is invalid');
        console.log('{' + y1 + ', ' + y2 + '} to {0, 0} is invalid');
        console.log('{' + x1 + ', ' + x2 + '} to {' + y1 + ', ' + y2 + '} is invalid');
    }
    else {
        let dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        // console.log(dist);

        if (dist >= 0) {
            console.log('{' + x1 + ', ' + x2 + '} to {0, 0} is valid');
            console.log('{' + y1 + ', ' + y2 + '} to {0, 0} is valid');
            console.log('{' + x1 + ', ' + x2 + '} to {' + y1 + ', ' + y2 + '} is valid');
        }
        else {
            console.log('{' + x1 + ', ' + x2 + '} to {0, 0} is invalid');
            console.log('{' + y1 + ', ' + y2 + '} to {0, 0} is invalid');
            console.log('{' + x1 + ', ' + x2 + '} to {' + y1 + ', ' + y2 + '} is invalid');
        }
    }
}
// aza(['3', '0', '0', '4']);
aza(['2', '1', '1', '1']);