function vladkosNotebook(data) {
    let restoredNotebook = {};
    for (let line of data) {
        let [color, type, value] = line.split('|');
        if (!restoredNotebook.hasOwnProperty(color)) {
            restoredNotebook[color] = {
                age: undefined,
                name: undefined,
                opponents: [],
                wins: 1,
                losses: 1
            };
        }

        let currentColor = restoredNotebook[color];
        if (type == 'win') {
            currentColor.opponents.push(value);
            currentColor.wins++;
        } else if (type == 'loss') {
            currentColor.opponents.push(value);
            currentColor.losses++;
        } else if (type == 'age') {
            currentColor.age = value;
        } else if (type == 'name') {
            currentColor.name = value;
        }
    }

    let output = {};
    for (let color of Object.keys(restoredNotebook).sort()) {
        let currentData = restoredNotebook[color];
        if (currentData.age != undefined && currentData.name != undefined) {
            output[color] = {
                age: currentData.age,
                name: currentData.name,
                opponents: currentData.opponents.sort(),
                rank: (currentData.wins / currentData.losses).toFixed(2)
            }
        }
    }

    console.log(JSON.stringify(output));
}

vladkosNotebook(["red|name|kiko","red|win|Vladko","blue|age|12","green|age|13","green|win|gosho","red|age|12","green|name|Pesho","green|win|ico","green|win|Gosho","green|win|qfkata","green|win|stamat","green|win|petko","green|win|mariya"]);
// vladkosNotebook(['red|age|kuro', 'red|name|Mitko'])
// vladkosNotebook(["purple|age|99", "red|age|44", "blue|win|pesho", "blue|win|mariya", "purple|loss|Kiko", "purple|loss|Kiko", "purple|loss|Kiko", "purple|loss|Yana", "purple|loss|Yana", "purple|loss|Manov", "purple|loss|Manov", "red|name|gosho", "blue|win|Vladko", "purple|loss|Yana", "purple|name|VladoKaramfilov", "blue|age|21", "blue|loss|Pesho"]);