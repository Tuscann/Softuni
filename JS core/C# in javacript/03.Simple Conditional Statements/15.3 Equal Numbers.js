function num(input) {

    let first = Number(input[0]);
    let secound = Number(input[1]);
    let third = Number(input[2]);

    if ((first == secound)&&(secound == third)) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}
num(['5', '5', '5']);
num(['15', '5', '5']);