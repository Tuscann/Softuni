function a(input) {

    let sums = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = Number(input[i + 1]);

        if (sums[town] == undefined) {
            sums[town] = income;
        }
        else {
            sums[town] += income;
        }
    }
    return JSON.stringify(sums);
}
console.log(a(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));