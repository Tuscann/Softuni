function sa(input) {
    let numbers = input.map(Number);

    let sum = numbers.reduce((previos, current)=>previos + current);

    let inversions = 0;
    for (i = 0; i < numbers.length; i++) {
        inversions += 1 / numbers[i];
    }
    let concant = "";
    for (i = 0; i < input.length; i++) {
        concant += numbers[i];
    }
    console.log(sum);
    console.log(inversions);
    console.log(concant);
}
// sa(['1', '2', '3']);
//sa(['2', '4', '8', '16']);
sa(['10', '20', '30']);
