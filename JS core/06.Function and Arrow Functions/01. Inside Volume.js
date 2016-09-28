function vol(input) {

    let number = JSON.stringify(input.map(Number)); //object


    console.log(number);

    for (let i = 0; i < number.length ; i+=3) {

        let res = number[i+1].split(',');
        console.log(res);
        // number = number.slice(0, 3);

        let x = res[0];
        let y = res[1];
        let z = res[2];

        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (x1 <= x && x <= x2) {
            if (y1 <= y && y <= y2) {
                if (z1 <= z && z <= z2) {
                    return console.log('inside');
                }
            }
        }
        return console.log('outside');


    }
}
// vol([8,20,22]);
vol([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);