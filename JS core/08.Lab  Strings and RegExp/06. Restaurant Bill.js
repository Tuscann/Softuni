function az(input) {
    let array = [];
    let total = 0;
    for (let i = 0; i < input.length; i += 2) {
        let product = input[i];
        array.push(product);
        let price = input[i + 1];
        total = total + Number(price);
    }
    console.log('You purchased ' + array.join(', ') + ' for a total sum of ' + total);
}
az(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);
az(['Cola', '1.35', 'Pancakes', '2.88']);