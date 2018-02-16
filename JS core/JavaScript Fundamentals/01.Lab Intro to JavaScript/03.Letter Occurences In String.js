function kamen(input, letter) {

    return input.split(letter).length - 1;
}

console.log(kamen('hello', 'l'));