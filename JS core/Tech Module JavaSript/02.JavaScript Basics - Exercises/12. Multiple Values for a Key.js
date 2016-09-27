function k(input) {
    let numbers = []; // празна area

    let wantedKeyToPrint = input[input.length - 1];

    for (i = 0; i < input.length - 1; i++) {
        let pair = input[i].split(' ');  // разделя по празно разстояние
        let key = pair[0];      //взема ключа
        let value = pair[1];     // взема стоиноста
        numbers[key] = value;

        if (wantedKeyToPrint == key) {  // ако ключа които искаме да принтираме е равен на текущия ключ принтираи
            console.log(numbers[key]);
        }
    }

    if (numbers[wantedKeyToPrint] == undefined) {//проверява дали стоиността на тази позиция е равна на неопределено което означава че не съществува
        console.log('None');
    }
}
//k(['key value', 'key eulav', 'test tset', 'key']);
// k(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);
//k(['3 bla', '3 alb', '2']);