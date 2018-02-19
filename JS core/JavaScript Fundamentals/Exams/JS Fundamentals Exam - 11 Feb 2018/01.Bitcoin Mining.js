function test(input) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let sumMoney = 0.0;
    let totalCoins = 0;
    let firstDayBuy = 0;
    let k = 0;

    for (let i = 1; i <= input.length; i++) {

        let money = parseFloat(input[i - 1]) * goldPrice;

        if (sumMoney + money >= bitcoinPrice && k === 0) {
            firstDayBuy = i;
            k++;
        }

        if (i / 3 > 0 && i % 3 === 0) {
            money *= 0.7;
        }

        sumMoney += money;

        if (sumMoney / bitcoinPrice > 1) {
            let count = sumMoney / bitcoinPrice;
            sumMoney -= parseInt(count) * bitcoinPrice;
            totalCoins += parseInt(count);
        }
    }

    console.log("Bought bitcoins: " + totalCoins);
    if (totalCoins > 0) {
        console.log("Day of the first purchased bitcoin: " + firstDayBuy);
    }
    console.log("Left money: " + sumMoney.toFixed(2) + " lv.")

}

test([100, 200, 300]);
test([50, 100]);
test([3124.15, 504.212, 2511.124]);