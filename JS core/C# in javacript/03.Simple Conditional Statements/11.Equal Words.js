function words(input) {
    let first = String(input[0]).toLowerCase();
    let secound = String(input[1]).toLowerCase();

    if (first==secound){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}
words(['Hello', 'Hello']);
words(['SoftUni', 'Softuni']);
words(['vodka', 'beer']);