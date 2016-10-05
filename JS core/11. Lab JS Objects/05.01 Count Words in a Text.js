function countWords(input) {
    let words = input[0].match(/\w+/g);

    let result = {};

    for (let word of words){
        if (result[word] === undefined){
            result[word] = 1;
        }
        else result[word]++;
    }

    console.log(JSON.stringify(result));
}

countWords(['Far too slow, you\'re far too slow.']);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);