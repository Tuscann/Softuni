function convertor(input) {

    let n = Number(input[0]);
    let first = String(input[1]);
    let secondCerrency = String(input[2]);

    let USD = 1.79549;
    let EUR = 1.95583;
    let GBP = 2.53405;
    let moneyInleva = 0.00;

    if (first == 'USD') {
        moneyInleva = n * USD;
    }
    else if (first == 'BGN') {
        moneyInleva = n;
    }
    else if (first == 'EUR') {
        moneyInleva = n * EUR;
    }
    else if (first == 'GBP') {
        moneyInleva = n * GBP;
    }
    var MoneyInWanted = 0.00;
    if (secondCerrency == "USD") {
        MoneyInWanted = moneyInleva / USD;
    }
    else if (secondCerrency == "EUR") {
        MoneyInWanted = moneyInleva / EUR;
    }
    else if (secondCerrency == "GBP") {
        MoneyInWanted = moneyInleva / GBP;
    }
    else if (secondCerrency == "BGN") {
        MoneyInWanted = moneyInleva;
    }
    console.log(MoneyInWanted.toFixed(2) + " " + secondCerrency);


}
convertor([20, 'USD', 'BGN']);
convertor([100, 'BGN', 'EUR']);