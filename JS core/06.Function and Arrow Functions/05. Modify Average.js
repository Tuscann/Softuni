function sas(input) {

    let string = String(input[0]); // прави стринг от входа

    var sumOfDigits = input.map(function (num) {
        return num.toString().split('').reduce(function (prev, current) {
            return parseInt(prev, 10) + parseInt(current, 10);
        }, 0);
    });   //прави число от входния стринг


    if ((sumOfDigits / input[0].length) > 5) {
        console.log(input[0]);  //ако средната сума е по голяма от 5 печатаи
    }
    else {
        for (i = 0; i < 20; i++) {
            string += 9;    // добавяме 9

           var curentNumberSum = string.split('').reduce(function (prev, current) {
                    return parseInt(prev, 10) + parseInt(current, 10);
                }, 0);         // прьави число от текущата сума

            if (curentNumberSum / string.length > 5) {
                console.log(string);  //ако средната сума е по голяма от 5 печатаи
                break
            }
        }
    }
}
// sas(['101']);
// sas(['5835']);
sas(['111111']);