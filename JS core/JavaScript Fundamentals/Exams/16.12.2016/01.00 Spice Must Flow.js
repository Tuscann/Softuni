function aa(input) {
    let spice = Number(input);
    let temporary = 0;
    let total = 0;
    let daysCounter = 0;

    while (true) {
        if (spice - (daysCounter * 10) < 100) {
            total -= 26;
            if (total < 0) {  //ако входа е под 100 за да печата нула дена
                total = 0;
            }
            break;
        }
        else {
            temporary = spice - (daysCounter * 10) - 26;
            total += temporary;
            daysCounter++;
        }

    }
    console.log(daysCounter);
    console.log(total);
}
aa('98');
// aa(['450']);
// aa(['200']);