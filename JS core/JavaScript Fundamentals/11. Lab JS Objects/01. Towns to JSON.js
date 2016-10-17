function a(input) {

    let firstRow = input[0].split(' ').join('').split('|').filter(Boolean);
    let town = firstRow[0];
    let latitude = firstRow[1];
    let longitude = firstRow[2];

    let person = '[';
    let x;
    for (let i = 1; i < input.length; i++) {
        let curent = input[i].split('|').filter(Boolean);

        let currentTown = curent[0].trim(); //махам празно преди и след града
        let cuurentlatitude = Number(curent[1]);
        let curentLongtitude = Number(curent[2]);

        x = '{"Town":"' + currentTown + '","Latitude":' + cuurentlatitude + ',"Longitude":' + curentLongtitude + '}';

        if (i == input.length - 1) {
            person += x;
        }
        else {
            person += x + ",";
        }
    }
    console.log(person + "]");
}
//a(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);
a(['| Town | Latitude | Longitude |','| Veliko Turnovo | 43.0757 | 25.6172 |','| Monatevideo | 34.50 | 56.11 |']);
// a(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']
// );
