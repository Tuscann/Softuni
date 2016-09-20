function triangleArea(num) {

    let a = parseInt(num[0]);
    let area = a * a * Math.PI;
    console.log(area);
    console.log(area.toFixed(2));

}
triangleArea([5]);
