function medenkaWars(input) {
    let darkPoints = 0;
    let darkCounter = 0;
    let darkLastStrike = 0;

    let whitePoints = 0;
    let whiteCounter = 0;
    let whiteLastStrike = 0;

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let attackPower = Number(tokens[0]);
        let attackType = tokens[1] + tokens[2];
        let damage = attackPower * 60;

        if (attackType == 'darkmedenkas') {
            darkCounter++;
            if (darkLastStrike == attackPower) {
                if (darkCounter == 5) {
                    damage = damage * 4.5;
                    darkCounter = 0;
                }
            }
            else {
                darkLastStrike = attackPower;
                darkCounter = 1;
            }
            darkPoints += damage;
        }
        else if (attackType == 'whitemedenkas') {
            whiteCounter++;
            if (whiteLastStrike == attackPower) {
                if (whiteCounter == 2) {
                    damage = damage * 2.75;
                   whiteCounter = 0;
                }
            }
            else {
                whiteLastStrike = attackPower;
                whiteCounter = 1;
            }
            whitePoints += damage;
        }
    }
    if (darkPoints > whitePoints) {
        console.log("Winner - Naskor\nDamage - " + darkPoints);
    }
    else if (darkPoints < whitePoints) {
        console.log("Winner - Vitkor\nDamage - " + whitePoints);
    }
}
medenkaWars(['2 dark medenkas', '1 white medenkas', '2 dark medenkas', '2 dark medenkas', '15 white medenkas', '2 dark medenkas', '2 dark medenkas']);
//medenkaWars(['5 white medenkas', '5 dark medenkas', '4 white medenkas']);
//medenkaWars(['2 dark medenkas', '2 white medenkas', '2 white medenkas', '2 dark medenkas', '2 dark medenkas']);
