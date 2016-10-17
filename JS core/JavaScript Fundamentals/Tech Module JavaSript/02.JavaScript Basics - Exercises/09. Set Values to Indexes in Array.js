function s(input) {

    let repeats = Number(input[0]);

    let numbers = []; // празна area
    for (let i = 0; i < repeats; i++) {
        numbers[i] = 0
    }

    for (i = 1; i < input.length; i++) {
        let pair = input[i].split(' - ');  // разделя по тире
        let index = Number(pair[0]);      //взема индекса
        let values = Number(pair[1]);     // взема числото

        numbers[index] = values;    //презаписва числото ако ти подадат същия индекс
    }
    for (let a of numbers) {
        console.log(a)
    }
}
// s(['3', '0 - 5', '1 - 6', '2 - 7']);
s(['2', '0 - 5', '0 - 6', '0 - 7']);