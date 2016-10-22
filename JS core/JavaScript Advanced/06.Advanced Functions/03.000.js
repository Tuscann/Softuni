function solve() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = ()=>sum;
    return add;
}
let add = solve();
console.log(add(10)(1)(3).toString());