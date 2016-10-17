function cin(input) {
    let type = String(input[0]);
    let r = Number(input[1]);
    let c = Number(input[2]);

    let total = 0;
    if (type == 'Premiere') {
        total = r * c * 12;
    }
    else if (type == 'Normal') {
        total = r * c * 7.5;
    }
    else if (type == 'Discount') {
        total = r * c * 5;
    }
    console.log(total.toFixed(2) + " leva");

}
cin(['Premiere', '10', '12']);
cin(['Normal', '21', '13']);
cin(['Discount', '12', '30']);