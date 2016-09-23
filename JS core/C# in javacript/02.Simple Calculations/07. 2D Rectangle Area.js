function area([x1,y1,x2,y2]) {

    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

    let area = 2 * (Math.abs(x2 - x1) + Math.abs(y1 - y2));
    let perimeter = (Math.abs(x2 - x1)* Math.abs(y1 - y2));

    console.log(perimeter);
    console.log(area);
}
area([60, 20, 10, 50]);
