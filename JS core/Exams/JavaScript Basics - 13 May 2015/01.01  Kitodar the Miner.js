function calculateEarnings(array) {
    var gold = 0;
    var silver = 0;
    var diamonds = 0;

    for (var i = 0; i < array.length; i++) {
        var regex = /mine\s*\w*\s*-\s*(gold|diamonds|silver)\s*:\s*(\d*)/;

        var match = array[i].match(regex);

        if(match !== null) {
            switch (match[1]) {
                case 'silver':
                    silver += Number(match[2]);
                    break;
                case 'gold':
                    gold += Number(match[2]);
                    break;
                case 'diamonds':
                    diamonds += Number(match[2]);
                    break;
            }
        }
    }
}

calculateEarnings(["mine gandalf - gold:5",     "mine               spongeBob -             silveR               : 19"]);
//calculateEarnings(["	mine mina - golD : 5","mine mina: gold: 5"]);