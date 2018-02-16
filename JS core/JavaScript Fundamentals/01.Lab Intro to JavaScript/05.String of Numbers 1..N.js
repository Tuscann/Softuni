function numbers(n) {

    let str = '';
    for (let i = 1; i <= n; i++) {
        str += i
    }
    return str;
}

console.log(numbers(['101']));
console.log(numbers(['11']));