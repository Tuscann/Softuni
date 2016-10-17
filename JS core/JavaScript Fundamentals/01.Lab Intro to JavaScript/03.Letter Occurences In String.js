function countLetter(input) {
    let str = String(input[0]);
    let letter = String(input[1]);
    let count = 0;

    for (let i = 0; i < str.length ;i++)
        if (str[i] == letter){
            count++;
        }
    return count
}

console.log(countLetter(['hello', 'l']));

