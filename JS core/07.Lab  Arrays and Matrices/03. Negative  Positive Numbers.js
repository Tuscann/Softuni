function aza(input) {
    let inputs = input.map(Number);
    let negative = [];
    let positive = [];

    for (i = 0; i < input.length; i++) {

        if (inputs[i] < 0) {
            negative.unshift(Number(input[i]));
        }
        else if (inputs[i] >= 0) {
            positive.push(Number(input[i]));
        }
    }
    console.log(negative.join('\n'));
    console.log(positive.join('\n'));
}
// aza(['7', '-2', '8', '9']);
aza(['3', '-2', '0', '-1']);

