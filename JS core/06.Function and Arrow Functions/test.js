function trip([x1,y1,x2,y2,x3,y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let AandB = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
    let BandC = Math.sqrt(Math.pow(Math.abs(x2 - x3), 2) + Math.pow(Math.abs(y2 - y3), 2));
    let AandC = Math.sqrt(Math.pow(Math.abs(x1 - x3), 2) + Math.pow(Math.abs(y1 - y3), 2));

    let distance1and2 = AandB + BandC;
    let distance2and3 = BandC + AandC;
    let distance1and3 = AandB + AandC;
    if (distance1and2 <= distance2and3) {
        console.log("1->2->3: " + distance1and2)
    }
    else if (distance1and3 < distance2and3) {
        console.log("2->1->3: " + distance1and3);
    }
    else {
        console.log("1->3->2: " + distance2and3);
    }
}
trip([0, 0, 2, 0, 4, 0]);