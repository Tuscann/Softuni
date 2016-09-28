function sas(input) {
    let num = input[0];

    function calcAvg() {
        let result = num;
        let sum = 0;
        let count = 0;
        while (result > 0) {
            sum += result % 10;
            result = (result - result % 10) / 10;
            count++;
        }
        return sum / count;
    }

    function add9() {
        return num * 10 + 9;
    }

    while (calcAvg() <= 5) {
        num = add9();
    }
    console.log(num);

}
sas(['101']);
sas(['5555']);