function das(input) {
    let str = String(input[0]).toUpperCase();  //голяма буква
    var outString = str.split(/\W+/g);  //всичко The /\w+/ pattern specifies to match one or more of any of the following characters: A-Z, a-z, 0-9, and the underscore character    g global more than one

    let temp = [];
    for (let each of outString){
       each&& temp.push(each)
    }
    outString=temp;  // object is outString
    console.log(outString.join(', '));
}
das(['Hi, how are you?']);
// das(['Functions in JS can be nested, i.e. hold other functions']);