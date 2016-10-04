function aza(input) {

    let string = input[0].toLowerCase();
    let searchedWord = input[1];
    console.log(string);
    console.log(searchedWord);

    console.log((string.match(new RegExp(searchedWord,'g'))||[]).length);

}
//aza(['The waterfall was so high, that the child couldn’t see its peak.', 'the']);
//aza(['Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.', 'ma']);
aza(['There was one. Therefore I bought it. I wouldn�t buy it otherwise.', 'there']);