function point([x1,y1,x2,y2,x,y]) {
    [x1, y1, x2, y2, x, y] = [x1, y1, x2, y2, x, y].map(Number);
    if ((x == x1 || x == x2) && (y >= y1 && y2 >= y)) {
        console.log('Border');
    }
    else if ((y == y1 || y == y2) && (x >= x1) && (x <= x2)) {
        console.log('Border');
    }
    else {
        console.log('Inside / Outside');
    }
}
point([[2, -3, 12, 3, 8, -1]]);
point([[2, -3, 12, 3, 12, -1]]);