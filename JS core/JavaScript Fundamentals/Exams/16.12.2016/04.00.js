function solve(flights) {
    const LAND = 'land';

    let landed = [];
    let townsStats = new Map();

    for (let flight of flights) {
        let [id, town, passengers, action] = flight.split(/\s+/g);

        if (action === LAND) {
            if (landed.indexOf(id) >= 0)
                continue;

            landed.push(id);
        } else {
            if (landed.indexOf(id) < 0)
                continue;

            landed = landed.filter(p => p != id);
        }

        if (!townsStats.has(town)) {
            townsStats.set(town, {arrivals: 0, departures: 0, planes: new Set()});
        }

        if (action === LAND)
            townsStats.get(town).arrivals += Number(passengers);
        else
            townsStats.get(town).departures += Number(passengers);

        townsStats.get(town).planes.add(id);
    }

    console.log('Planes left:');
    let sorted = landed
        .sort((p1, p2) => p1.localeCompare(p2));

    for (let p of sorted) {
        console.log(`- ${p}`);
    }

    let sortedTowns = [...townsStats.keys()]
        .sort(function (t1, t2) {
            let res = townsStats.get(t2).arrivals - townsStats.get(t1).arrivals;
            if (res === 0) {
                res = t1.localeCompare(t2);
            }

            return res;
        });

    for (let town of sortedTowns) {
        let currentTown = townsStats.get(town);

        console.log(town);
        console.log(`Arrivals: ${currentTown.arrivals}`);
        console.log(`Departures: ${currentTown.departures}`);
        console.log('Planes:');
        let sortedPlanes = [...currentTown.planes.values()]
            .sort((p1, p2) => p1.localeCompare(p2));

        for (let p of sortedPlanes) {
            console.log(`-- ${p}`);
        }
    }
}

solve(["Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"]);

solve(["Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"]);