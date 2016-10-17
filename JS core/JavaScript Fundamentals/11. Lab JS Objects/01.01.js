function parseTownsToJSON(input) {
    let townsArr = [];
    for (let town of input.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let townObj =
        {
            Town: townName, Latitude: Number(lat), Longitude: Number(lng)
        };
        townsArr.push(townObj);
    }
    return JSON.stringify(townsArr);
}

console.log(parseTownsToJSON(['|Town|Lat|Lng|', '|Sofia |42|23|']));