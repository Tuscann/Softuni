function na(input) {
    n = input.map(parseFloat);
    for (i = 0; i < n.length; i++) {
        console.log("Enter a number in the range [1...100]: ");

        if (n[i] > 100 || n[i] < 1) {
            console.log('Error');
        }
        else {
            console.log(n[i]);
            break;
        }
    }
}
// n(['200', '-3', '114', '-300', '12']);
na(['50']);
na(['-10', '-20', '30', '-50']);