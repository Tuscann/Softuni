function point([x1,y1,x2,y2,x,y]) {
    [x1,y1,x2,y2,x,y]=[x1,y1,x2,y2,x,y].map(Number);

    if (x <= x2 && x >= x1 && y <= y2 && y >= y1) {
        console.log('Inside');
    }
    else {
        console.log('Outside');
    }

}
point(['2', '-3', '12', '3', '8', '-1']);
point(['2', '-3', '12', '3', '11', '-3.5']);
point(['-1', '-3', '4', '1', '0.5', '1']);
point(['-1', '-3', '4', '1', '-1.2', '1.4']);