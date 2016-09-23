function area(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);

    let area = height * width;
    let perimeter = 2 * (height + width);

    console.log(area + "\n" + perimeter);
}
area(['2', '2']);
area(['1', '3']);
area(['2.5', '3.14']);