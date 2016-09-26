function as(input) {
    for (i = 0; i < input.length; i++) {
        if (input[i] == 'Stop') {
            break
        }
        console.log(input[i]);
    }
}
as(['Line 1', 'Line 2', 'Line 3', 'Stop']);