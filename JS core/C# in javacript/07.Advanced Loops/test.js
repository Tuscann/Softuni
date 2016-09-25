function circleArea(input) {

    n = input.map(String);
    let repeats = input[0];

    var real = n.splice(1, n.length);
    let totalMoney = 0.0;

    if (repeats == 0) {
        console.log('The price for the coffee is: $0' );
        console.log('Total: $0' );
    }
    if (repeats > 0) {
        for (i = 0; i < repeats; i++) {

            var pricePerCapsule = Number.parseFloat(real[i]);
            var date = real[i + 1].split('/');
            var capsulesCount = parseInt(real[i + 2]);
            let diffDays = new Date(Date.UTC(date[2], date[1], 0));
            let price = (diffDays.getDate() * capsulesCount) * pricePerCapsule;

            console.log('The price for the coffee is: $' + price.toFixed(2));
            totalMoney = totalMoney + price;
            real.splice(0, 2)
        }
        console.log('Total: $' + totalMoney.toFixed(2));
    }
}
// circleArea(['0']);
// circleArea(['1', '1.53', '06/06/2016', '8']);
// circleArea(['1', '1.53', '06/06/2016', '8']);
//circleArea(['2', '7922816251426433759354395033', '6/02/1960', '2147483646', '7922816251426433759354395033', '03/01/1980', '2147483646']);