function s(arr) {

    let numbers = []; // празна area

    for (i = 0; i < arr.length; i++) {
        let pair = arr[i].split(' ');   // раздели по разтояние

        let commnad = pair[0];    // вземам командата
        let number = Number(pair[1]);

        if (commnad == "add") {    // добави елемент
            numbers.push(number)
        }
        else if (pair[0] == "remove") {  // премахни елемент
            numbers.splice(number, 1);   // премахни елемент на позиция number със дължина 1
        }
    }
    for (let num of numbers) {
        console.log(num);
    }

}
// s(['add 3', 'add 5', 'add 7']);
// s(['add 3', 'add 5', 'remove 1', 'add 2']);
s(['add 3', 'add 5', 'remove 1','remove 0', 'add 7']);