function star(input) {

    let sentence = input[0];
    let startedWord = input[1];

    let truee = sentence.indexOf(startedWord);

    if (truee == 0) {
        console.log('true');
    }
    else{
        console.log('false');
    }
}
star(['How have you been?', 'how']);