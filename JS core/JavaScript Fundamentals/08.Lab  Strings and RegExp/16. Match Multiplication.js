function matchMultiplication([text]) {

    let pattern = /-?\d+[ *.]+-?[\d].[\d]+/g;

    // -? може и да има знак минус може и да няма

    text = text.replace(pattern, (match) =>
    {
        let numbers = match.split('*').filter(x => x != '').map(Number);
        return numbers[0] * numbers[1];
    });

    console.log(text);
}

matchMultiplication(['My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).']);