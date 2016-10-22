function as(arrayNumbers, string) {

    let sorted='';
    if (string == 'asc') {
        sorted = Array.apply(null, arrayNumbers.sort((a, b)=>a > b));
    }
    else if(string == 'desc')
    {
        sorted = Array.apply(null, arrayNumbers.sort((a, b)=>b > a));
    }
    return sorted
};
console.log(as([14, 7, 17, 6, 8], 'asc'));
console.log(as([14, 7, 17, 6, 8], 'desc'));