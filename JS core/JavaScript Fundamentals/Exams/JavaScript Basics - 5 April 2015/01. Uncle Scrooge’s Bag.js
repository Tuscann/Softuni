function a(input) {

    let patern = /^(coin\s)([^-]?[0-9]+[\.]?)/i;

    let total = 0;

    for (i = 0; i < input.length; i++) {
        let x = input[i].match(patern);

        if (x != null) {
            total += Number(x[2]);
        }
    }
    let x1 = Math.floor(total / 100);
    total = total % 100;
    let x2 = Math.floor((total / 10));
    total = total % 10;
    let x3 = Math.floor(total);

    console.log('gold : ' + x1);
    console.log('silver : ' + x2);
    console.log('bronze : ' + x3);

}

a(['Coin 1', 'coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500', 'cigars 1']);
a(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);
a(['coin 10001', 'coin 200.0', 'coin -5', 'coin 10.50', 'coin -100', 'coin 2002.00', 'coin fifty', 'cigars 1']);









