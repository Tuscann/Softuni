function radians([n]) {
    let degree = Number(n) * 0.9 % 360;

    if (degree < 0){
        degree += 360;
    }
    return degree;
}
console.log(radians(['-1']));
console.log(radians(['0']));
console.log(radians(['1']));
console.log(radians(['100']));
console.log(radians(['399']));
console.log(radians(['400']));
console.log(radians(['401']));
console.log(radians(['850']));
console.log(radians(['-50']));
console.log(radians(['-410']));