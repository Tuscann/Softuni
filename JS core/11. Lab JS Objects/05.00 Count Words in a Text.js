function a(input) {

    let text = input.join('fuckyou');
    let regex=/[^A-Za-z0-9_]+/;  // започва със буква число или долна черта много пъти
    let words = text.split(regex).filter(w => w != ''); // премахни празните членове
    let wordsCount = {};
    for (let w of words)
        wordsCount[w] ? wordsCount[w]++ :
            wordsCount[w] = 1;
    return JSON.stringify(wordsCount);


}
console.log(a(['Far too slow, you\'re far too slow.']));
console.log(a(['JS devs use Node.js for server-side JS.-- JS for devs']));