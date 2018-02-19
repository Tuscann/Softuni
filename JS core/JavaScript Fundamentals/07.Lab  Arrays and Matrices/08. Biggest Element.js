function az(input) {
    // let marix = input.map(row=>row.split(' ').map(Number));
    //
    // let biggest = Number.NEGATIVE_INFINITY;
    //
    // marix.forEach(row=>row.forEach(c => biggest = Math.max(biggest, c)));
    //
    // console.log(biggest);

    let array = input.join(' ')
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a)
        .slice(0, 1);

    console.log(array.toString());
}

az(['20 50 10', '8 33 145']);
az(['1 2 345 3', '3 123 6567 124']);