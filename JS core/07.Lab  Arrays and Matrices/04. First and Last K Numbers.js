function a(input) {

    let desirelength = Number(input[0]);

    let firstRow = input.slice(1, desirelength + 1);
    let lastRow = input.slice(input.length - desirelength, input.length);
    console.log(firstRow);
    console.log(lastRow);

}
a(['2', '7', '8', '9']);
a(['3', '6', '7', '8', '9']);