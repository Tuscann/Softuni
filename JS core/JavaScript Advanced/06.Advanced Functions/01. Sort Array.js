function as(arrayNumbers, string) {
    let sorting =
    {
        asc: Array.apply(null, arrayNumbers.sort((a, b)=>a > b)),
        desc: Array.apply(null, arrayNumbers.sort((a, b)=>b > a))
    };
    return sorting[string];
}
console.log(as([14, 7, 17, 6, 8], 'asc'));
console.log(as([14, 7, 17, 6, 8], 'desc'));