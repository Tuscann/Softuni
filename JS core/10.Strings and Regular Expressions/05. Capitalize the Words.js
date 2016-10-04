function a(input) {

    let emptyString = "";
    for (let i = 0; i < input.length; i++) {
        let cuurent = input[0].split(' ');

        let regulalExp = '/[a-zA-Z]+/g';

        let t = cuurent.match(regulalExp);

        console.log(t);
    }


}
a(['Capitalize these words']);