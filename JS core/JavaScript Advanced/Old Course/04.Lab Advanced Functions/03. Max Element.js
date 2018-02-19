function result(input) {
    return Math.max.apply(null, input.map(Number));
}
console.log(result([10, 20, 5]));
console.log(result([1, 44, 123, 33]));