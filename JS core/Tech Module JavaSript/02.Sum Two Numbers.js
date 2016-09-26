function two([one,two]) {
    [one, two] = [one, two].map(Number);

    let sum = one + two;
    console.log(sum);
}
two(['23', '23']);