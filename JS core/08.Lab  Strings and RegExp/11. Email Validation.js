function az (input) {


    let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/g;
    //^[a-zA-Z0-9] всяко коетозапочва със големи и малки букви или числата от 0 до 9
    // +\@[a-z]## escape @ малки букви



    let result = pattern.test(input);

    if(result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
az(['valid@email.bg']);
az(['invalid@emai1.bg']);