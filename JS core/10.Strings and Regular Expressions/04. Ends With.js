function star(input) {

    let sentence = input[0].split('').reverse().join('');
    let startedWord = input[1].split('').reverse().join('');

    let truee = sentence.indexOf(startedWord);

    if (truee == 0) {
        console.log('true');
    }
    else{
        console.log('false');
    }
}
star(['How have you been?', 'how']);
star(['This sentence ends with fun?', 'fun?']);