function prime(input) {
    let n = Number(input[0]);

    let flag = 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }

    if (n < 2) {
        console.log("false");
    }
    else if (flag == 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
prime(['-5']);
prime(['0']);
prime(['1']);
prime(['2']);
prime(['7']);
prime(['8']);
prime(['81']);


