function kitodarTheMiner(input) {
    let silver = 0;
    let gold = 0;
    let diamonds = 0;
    for (let i = 0; i < input.length; i++) {
        let str = input[i].trim().split(' ');
        if (str[0] == "mine") {
            let x = input[i].trim().split(':');
            let fisrt = x[0].trim().split('-');
            let typeofOdd = fisrt[1].trim();
            if (typeofOdd == 'gold') {
                gold += Number(x[1])
            }
            if (typeofOdd == 'silver') {
                silver += Number(x[1])
            }
            if (typeofOdd == 'diamonds') {
                diamonds += Number(x[1])
            }
        }
    }
    console.log('*Silver: ' + silver);
    console.log('*Gold: ' + gold);
    console.log('*Diamonds: ' + diamonds);
}
// kitodarTheMiner(["mine     bobovDol     -     gold: 10",
//     "mine medenRudnik - silver : 22",
//     "mine chernoMore - shrimps : 24",
//     "gold: 50"
// ]);
//kitodarTheMiner(["mine gandalf - gold:5","mine               spongeBob -             silveR               : 19"]);
kitodarTheMiner(["mine gandalf - gold:5","mine               spongeBob -             silveR               : 19"]);