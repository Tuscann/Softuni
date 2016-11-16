function a(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);
    let e = Number(input[4]);


    if (a > b) {
        if (a > c) {
            if (a > d) {
                if (a > e) {
                    console.log(a)
                }
            }
        }
    }
    else if (b > a) {
        if (b > c) {
            if (b > d) {
                if (b > e) {
                    console.log(b)
                }
            }
        }
    }
    else if (c >= a && c >= b && c >= d && c >= e) {
        console.log(c)

    }
    else if (d >= a && d >= b && d >= c && d >= e) {
        console.log(d)

    }
    else if (e >= a && e >= b && e >= c && e >= d) {
        console.log(e)

    }


}
a(['4', '-22', '1', '0', '0']);