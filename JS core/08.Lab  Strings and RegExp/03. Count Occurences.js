function aza([string,text]) {

    let count = 0;
    let p = -1;

    while (true) {
        p = text.indexOf(string, p + 1);
        if (p == -1) {
            return count;
        }
        count++;
    }
}
console.log(aza(['the', 'The quick brown fox jumps over the lay dog.']));
console.log(aza(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']));