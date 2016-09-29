function as(arr) {
    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2*x)
        .reverse();
    return result.join(' ');
}

console.log(as(['10', '15', '20', '25']));
console.log(as(['5', '10']));