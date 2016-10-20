function radicalMarketing(data) {
    let database = new Map;
    let subscribedToCount = new Map;

    for (let line of data) {
        if (line.indexOf('-') >= 0) {
            let [personA, personB] = line.split(/-/g);
            if (database.has(personA) &&
                database.has(personB) &&
                personA != personB &&
                !arrayHas(database.get(personB), personA)) {

                database.get(personB).push(personA);
                subscribedToCount.set(personA, subscribedToCount.get(personA) + 1);
            }
        } else {
            let name = line;
            if (!database.has(name)) {
                database.set(name, []);
                subscribedToCount.set(name, 0);
            }
        }
    }

    let sorted = [...database.keys()].sort(function (kA, kB) {
        if (database.get(kA).length == database.get(kB).length) {
            return subscribedToCount.get(kB) - subscribedToCount.get(kA)
        }

        return database.get(kB).length - database.get(kA).length;
    });

    let theMan = sorted[0];
    console.log(theMan);
    if (database.get(theMan).length > 0) {
        for (let i = 0; i < database.get(theMan).length; i++) {
            console.log(`${i + 1}. ${database.get(theMan)[i]}`);
        }
    }

    function arrayHas(array, element) {
        for (let el of array) {
            if (el == element) {
                return true;
            }
        }

        return false;
    }
}
// radicalMarketing(["A", "B", "C", "D", "A-B", "B-A", "C-A", "D-A"]);
radicalMarketing(["J", "G", "P", "R", "C", "J-G", "G-J", "P-R", "R-P", "C-J"]);