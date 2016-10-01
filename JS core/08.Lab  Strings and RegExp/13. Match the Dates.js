function a(input) {

    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    // \b да има разтояние или препинателен знак преди
    // [A-Z] - една буква голяма задължително
    // [a-z]{2} - две малки букви задължително

    let dates = [], match;

    for (let currentSentence of input) {
        let match = pattern.exec(currentSentence);

        while (match) {
            dates.push(match[0]+` (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            match = pattern.exec(currentSentence)
        }
    }
    console.log(dates.join(`\n`));
}
a([ '1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way',
    '-- Ivo, 28-Sep-2016.' ]);
a([]);