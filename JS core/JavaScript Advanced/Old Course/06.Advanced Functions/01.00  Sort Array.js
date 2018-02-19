function sortArray(arr, command) {
    let sorting =
    {
        asc: (arr) => arr.map(Number).sort((a, b) => a - b),
        desc: (arr) => arr.map(Number).sort((a, b) => b - a)
    };
    return sorting[command](arr);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));