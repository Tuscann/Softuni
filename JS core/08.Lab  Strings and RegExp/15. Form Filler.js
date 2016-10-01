function Form_Filler (input) {
    let username = input.shift();
    let email = input.shift();
    let number = input.shift();

    let text = input;

    text.forEach(line => {
        let userName = new RegExp('\<\\![a-zA-Z]+\\!\>', 'g');
        let emailReg = new RegExp('\<\\@[a-zA-Z]+\\@\>', 'g');
        let numberReg = new RegExp('\<\\+[a-zA-Z]+\\+\>', 'g');

        line = line.replace(userName, username);
        line = line.replace(emailReg, email);
        line = line.replace(numberReg, number);

        console.log(line);
    });
}
// Form_Filler(['Pesho',
//     'pesho@softuni.bg',
//     '90-60-90',
//     'Hello, <!username!>!',
//     'Welcome to your Personal profile.',
//     'Here you can modify your profile freely.',
//     'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//     'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//     'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
// ]);