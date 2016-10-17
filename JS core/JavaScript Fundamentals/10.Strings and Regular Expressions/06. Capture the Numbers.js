function a(input) {

    // let text = '';
    // let numbers = [];
    // let regex = /\d+/g;
    // // една или повиче цифри  g = намери всички;
    // for (let i = 0; i < input.length; i++) {
    //     let currentSentence = input[i];
    //     text += currentSentence;
    // }
    // let match = regex.exec(text);
    //
    // while (match) {
    //     numbers.push(match[0]);
    //     match = regex.exec(text);
    // }
    // console.log(numbers.join(' '));

    console.log(input.join('').match(/\d+/g).join(' '));
}
a(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);