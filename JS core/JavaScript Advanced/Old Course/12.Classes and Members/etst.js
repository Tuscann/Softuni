function a(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    if (a == b) {
        if (b == c) {
            console.log(a + " " + b + " " + c);
        }
        else if(b > c){
            console.log(b + " " + a + " " + c);
        }
        else if(b < c){
            console.log(c + " " + a + " " + b);
        }
    }
    else if (b == c ) {
        if(a < c){
            console.log(c + " " + b + " " + a);
        }
        else if(a > c){
            console.log(a + " " + b + " " + c);
        }
    }
    else if (a == c ) {
        if(b > c){
            console.log(b + " " + a + " " + c);
        }
        else if(b < c){
            console.log(c + " " + a + " " + b);
        }
    }
    else if (a < b && b < c) {
        console.log(c + " " + b + " " + a);
    }
    else if (a < b && b > c && a > c) {
        console.log(b + " " + a + " " + c);
    }
    else if (a < b && b > c && a < c) {
        console.log(b + " " + c + " " + a);
    }
    else if (a > b && b < c && a < c) {
        console.log(c + " " + a + " " + b);
    }
    else if (a > b && b < c && a > c) {
        console.log(a + " " + c + " " + b);
    }
    else if (a > c && b < c) {
        console.log(a + " " + c + " " + b);
    }
    else if (a > c && b > c && a > b) {
        console.log(a + " " + b + " " + c);
    }
    else if (a > c && b > c && a < b) {
        console.log(a + " " + b + " " + c);
    }
}
// a([2, 2, 2]);
// a([2, 2, 3]);
// a([2, 2, 1]);
// a([2, 6, 6]);
// a([2, 2, 2]);
// a([2, 4, 2]);
// a([2, 1, 2]);
// a([2, 4, 6]);
// a([3, 4, 2]);
// a([2, 4, 3]);
// a([11, 4, 18]);
// a([11, 4, 6]);
//a([12, 3, 6]);
//a([12, 8, 6]);
//a([12, 18, 6]);
