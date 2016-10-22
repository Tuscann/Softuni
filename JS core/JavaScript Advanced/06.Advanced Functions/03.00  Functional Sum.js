function add (n) {
    let v = (x) => {
        return add (n+x)
    };
    v.valueOf = () => {
        return n
    };
    return v
}
console.log(add(1)(6)(-3)(4).valueOf());