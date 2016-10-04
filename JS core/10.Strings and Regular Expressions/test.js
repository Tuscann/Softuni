function startsWith([array,string]) {
    [array, string] = [array, string].map(el => el.split(''));

    for (let i = 0; i < Math.min(array.length, string.length); i++) {
        if (array[i] != string[i]) {
            return console.log('false');
        }
        console.log(array[i]);
        console.log(string[i]);

    }
    console.log('true');
}
//startsWith(['How have you been?', 'how']);
startsWith(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta']);