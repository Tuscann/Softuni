function solve(array) {
    array = array.map(Number);
    let str = "";
    let total = 0;

    while (true) {
        let currentPrice = 0;
        for (let indexs in array) {
            if (array[indexs] < 30) {
                currentPrice += 195;
                array[indexs]++;
            }
        }
        if (currentPrice == 0) {
            break; // ако числата са равни на 30 цената е равна на 0 прекъсни цикъла
        }
        else {
            total += currentPrice;
            str += currentPrice + ", ";
        }
    }
    console.log(str.replace(/,(\s+)?$/, '')); //махни последната запетая
    console.log(total * 1900 + " pesos")
}
solve([21, 25, 28]);