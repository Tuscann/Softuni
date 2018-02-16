function circleArea(a) {

    a = Math.abs(a);

    if (a % 2 === 1) {
        return "odd";
    }
    else if (a % 2 === 0) {
        return "even";
    }
    return "invalid"
}

console.log(circleArea(5));
console.log(circleArea(8));
console.log(circleArea(1.5));
console.log(circleArea(-3));