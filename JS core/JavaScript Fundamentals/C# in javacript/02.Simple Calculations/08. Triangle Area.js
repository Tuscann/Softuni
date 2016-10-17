function area(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);

    let area = (a * h) / 2;
    console.log("Triangle area = " + area.toFixed(2));

}
area(['20', 30]);
area(['7.75', '8.45']);