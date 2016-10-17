function a(input) {

    let arrayCity = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let each = input[i].split("|");

        let city = each[1].toString().trim();
        arrayCity.push(city);
        let money = each[2].toString().replace(/ /g, '');
        sum+=Number(money);
    }
    console.log(arrayCity.join(', '));
    console.log(sum);

}
a(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);