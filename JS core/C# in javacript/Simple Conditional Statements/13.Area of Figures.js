function type(input) {

    let figure = String(input[0]);
    let a = Number(input[1]);
    let b = Number(input[2]);

    if (figure == 'square') {
        console.log(a * a);
    }
    else if (figure == 'rectangle') {
        console.log(a*b);
    }
    else if(figure=='circle'){
        console.log(Math.PI*a*a);
    }
    else if(figure=='triangle'){
        console.log(a*b/2);
    }

}
type(['square', '5']);
type(['rectangle', '7', '2.5']);
type(['circle', '6']);
type(['triangle', '4.5', '20']);