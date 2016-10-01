function az (input) {
    // let pattern = /^[a-zA-Z0-9]## големи и малки букви и числата от 0 до 9
    // +\@[a-z]##малки букви +\.[a-z]+$/g;

    let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/g;

    let result = pattern.test(input);

    if(result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
az(['valid@email.bg']);
az(['invalid@emai1.bg']);