function filterByAge(bottles, quantity) {
    let boxses = bottles / quantity;
    return Math.ceil(boxses);
}
console.log(filterByAge(20, 5));
console.log(filterByAge(15, 7));
console.log(filterByAge(5, 10));