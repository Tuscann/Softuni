function secretDataRegex(input) {
    let regexName = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let regexPhone = /\+[0-9-]{10}(?=\s|$)/g;
    let regexId = /![a-zA-Z0-9]+(?=\s|\t|$)/g;
    let regexBase = /_[0-9A-Za-z]+(?=\s|$)/g;

    for (let line of input) {
        console.log(line
            .replace(regexName, m => '|'.repeat(m.length))
            .replace(regexPhone, m => '|'.repeat(m.length))
            .replace(regexId, m => '|'.repeat(m.length))
            .replace(regexBase, m => '|'.repeat(m.length))
        )
    }
}
secretDataRegex(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796...',
    'I can\'t really remember...',
    'He said something about "finishing work with subject !2491a23BVB34Q and returning to Base _Aurora21".',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);