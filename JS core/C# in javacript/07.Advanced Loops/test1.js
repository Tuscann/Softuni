function solve([n, ...input]) {
    n = Number(n);
    let total = 0.0;

    for (let i = 0; i < input.length; i += 3) {

        var pricePerCapsule = Number.parseFloat(input[i]);
        var month = input[i + 1].split('/');
        var capsulesCount = parseInt(input[i + 2]);

        var diffDays = daysInMonth(Number(month[1]), Number(month[2]));
        var price = ((diffDays * capsulesCount) * pricePerCapsule);
        console.log(price.toFixed(20));
        console.log(round(price, 2));
        total += price;
        console.log(`The price for the coffee is: $${price.toFixed(2)}`)
    }

    console.log(`Total: $${round(total,3).toFixed(2)}`);
    return;

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function round(number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };


}
// solve(['1', '1.53', '06/06/2016', '8']);

solve(['2', '4.99', '06/07/2016', '3', '0.35', '03/01/2013', '5']);