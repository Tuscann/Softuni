function numbers(input) {
    let n = Number(input[0]);
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += i
    }
    return str;
}
console.log(numbers(['11']));
