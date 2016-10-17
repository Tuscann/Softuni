function a(input) {

    let array = [];
    for (let i = 0; i < input.length; i++) {
        let email = input[i].split('@');
        let dots = email[1].split('.');
        let temp = '';

        for (let k = 0; k < dots.length; k++) {
            let firstChar = dots[k];
            temp = temp + firstChar[0];
        }
        array.push(email[0] + '.' + temp);
    }
    console.log(array.join(', '));
}
a(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);