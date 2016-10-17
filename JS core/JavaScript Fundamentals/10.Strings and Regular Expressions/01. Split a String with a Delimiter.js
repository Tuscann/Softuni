function de(input) {

    let string = input[0];
    let delimeter = input[input.length - 1];

    let splittedElements = string.split(delimeter);

    for (let i = 0; i < splittedElements.length; i++) {

        console.log(splittedElements[i]);
    }
}
de(['one-two-three-four-five', '-']);