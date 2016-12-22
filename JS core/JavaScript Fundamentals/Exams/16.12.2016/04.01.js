function solve(input) {
    let airport = new Map();
    let leftPlanes = new Set();
    for (let request of input) {
        // console.log(airport)
        let [id, town, passengers, action] = request.split(' ');
        passengers = Number(passengers);
        if (action == 'land') {
            if (!leftPlanes.has(id)) {
                leftPlanes.add(id);
                if (!airport.has(town)) {
                    let obj = {'arrivals': passengers, 'departures': 0, planes: new Set()};
                    obj['planes'].add(id);
                    airport.set(town, obj);
                }
                else {
                    airport.get(town)['arrivals'] += passengers;
                    airport.get(town)['planes'].add(id);
                }
            }

        }
        else if (action == 'depart') {
            if (leftPlanes.has(id)) {
                leftPlanes.delete(id);
                if (airport.has(town)) {
                    airport.get(town)['departures'] += passengers;
                    airport.get(town)['planes'].add(id);
                }
                else {
                    let obj = {'arrivals': 0, 'departures': passengers, planes: new Set()};
                    obj['planes'].add(id);
                    airport.set(town, obj);
                }
            }
        }

    }

    let leftPlanesArr = Array.from(leftPlanes);
    leftPlanesArr.sort(function (a, b) {
        if (a.toUpperCase() < b.toUpperCase()) {
            return -1;
        }
        if (a.toUpperCase() > b.toUpperCase()) {
            return 1;
        }
        return 0;
    });
    console.log("Planes left:");
    for (let plane of leftPlanesArr) {
        console.log("- " + plane)
    }

    let airportArr = Array.from(airport);
    airportArr.sort(function (a, b) {
        if (a[1]['arrivals'] < b[1]['arrivals']) //sort arrivals descending
            return 1;
        if (a[1]['arrivals'] > b[1]['arrivals'])
            return -1;

        if (a[0].toUpperCase() > b[0].toUpperCase()) {
            return -1;
        }
        if (a[0].toUpperCase() < b[0].toUpperCase()) {
            return 1;
        }
        return 0;
    });

    for (let array of airportArr) {
        let townName = array[0];
        console.log(townName);
        let arrivals = array[1]['arrivals'];
        let departures = array[1]['departures'];
        console.log("Arrivals: " + arrivals);

        console.log('Departures: ' + departures);
        let planesInTown = array[1]['planes'];
        let planesArr = Array.from(planesInTown);
        planesArr.sort(function (a, b) {
            if (a.toUpperCase() < b.toUpperCase()) {
                return -1;
            }
            if (a.toUpperCase() > b.toUpperCase()) {
                return 1;
            }
            return 0;
        });
        console.log("Planes:");
        for (let plane of planesArr) {
            console.log("-- " + plane)
        }
    }

}
solve([
    "planeA Atown 1 land",
    "planeA Btown 1 depart",
    'planeA Btown 1 depart'
]);

//sortvane na samoleti po azbuchen red case sensitive