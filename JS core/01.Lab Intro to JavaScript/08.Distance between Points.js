function distanceBetweenPoints(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let pointA = {x: x1, y: y1, z: "ivan"};
    let pointB = {x: x2, y: y2, z: 'money'};

    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);

    let distance = Math.sqrt(distanceX + distanceY);
    return (distance);
}
console.log(distanceBetweenPoints(['2', '4', '5', '0']));
console.log(distanceBetweenPoints(['2.34', '15.66', '-13.55', '-2.9985']));
