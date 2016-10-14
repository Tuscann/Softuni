function solve(input) {
    let pat = /^mine/gi;
    var silver = 0, gold = 0, diamonds = 0;
    let arr = input.filter(r=> {

        let row = r.trim().split('-').map(a=>a.trim());

        row.forEach((line, index) => {
            let current = line.trim();
            if (index == 0 && current.startsWith('mine')) {

            } else if (index == 1) {
                let pat = /(gold|silver|diamonds)(\s+)?\:(\s+)?(\d+)/gi;
                let match = line.match(pat);
                if (match !== null) {
                    let s = match[0].split(':').map(a=>a.trim());
                    addResource(s[0], s[1], silver, gold, diamonds)
                }
            }
        });
    });
    console.log(`*Silver: ${silver}\n*Gold: ${gold}\n*Diamonds: ${diamonds}`);

    function addResource(str, qty) {
        qty = Number(qty);
        switch (str) {
            case 'silver':
                silver += qty;
                break;
            case 'gold':
                gold += qty;
                break;
            case 'diamonds':
                diamonds += qty;
                break;
            default:
                break;
        }
    }
}
solve(["mine     bobovDol     -     gold: 10",
    "mine medenRudnik - silver : 22",
    "mine chernoMore - shrimps : 24",
    "gold: 50"
]);