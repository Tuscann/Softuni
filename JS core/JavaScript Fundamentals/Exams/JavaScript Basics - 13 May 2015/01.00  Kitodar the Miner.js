function ads(input) {

    let goldSilver = 0;
    let goldGold = 0;
    let goldDiamonds = 0;

    for (i = 0; i < input.length; i++) {
        let curent = input[i].trim().split(/\s+/g);
        // console.log(curent);
        let mine = curent[0];
        if (mine == 'mine') {
            let now = input[i].toLowerCase().split(/\s+-\s+/g);
            //console.log(now[0]);
            let oressss = now[1];

             console.log(now);
             // console.log(input[i]);
            // let ore = oressss.split(/\s*:\s*/g);
            // console.log(ore);
            //
            // if (ore[0] == 'gold' || ore[0] == 'silver' || ore[0] == 'diamonds') {
            //     let money = ore[1];
            //     // console.log(money);
            //     money = Number(money);
            //
            //     if (ore[0] == 'silver') {
            //         goldSilver += money
            //     }
            //     if (ore[0] == 'gold') {
            //         goldGold += money
            //     }
            //     if (ore[0] == 'diamonds') {
            //         goldDiamonds += money
            //     }
            // }
        }
    }
    // console.log('*Silver: ' + goldSilver);
    // console.log('*Gold: ' + goldGold);
    // console.log('*Diamonds: ' + goldDiamonds);


}
//ads(["mine bobovDol - gold : 10", "mine medenRudnik - silver  :  22", "mine chernoMore - shrimps : 24", "gold: 50"]);
ads(["	mine mina - golD : 5","mine mina: gold: 5"]);
//ads(["mine gandalf - gold:5","mine               spongeBob -             silveR               : 19"]);
//ads(["mine bobovdol - gold: 10", "mine - diamonds: 5", "mine colas - wood: 10", "mine myMine - silver:  14", "mine silver:14 - silver: 14"]);