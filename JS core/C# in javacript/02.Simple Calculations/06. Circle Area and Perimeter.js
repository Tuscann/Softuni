function area(input) {
    let r=Number(input[0]);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    console.log('Area = ' + area);
    console.log('Perimeter = ' + perimeter);

}
area(['4.5'])
