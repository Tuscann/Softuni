function fibonacci(x) {
    let start = 2;
    while (start <= Math.sqrt(Number(x))) {
        if (x % start++ < 1) {
            return false;
        }
    }
    return x > 1

}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

