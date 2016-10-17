function das(input) {
    let str = input[0];
    let regex = /\W+/g;
    let array = str.split(regex);
    // console.log(array);
    array = array.map(e => e.toUpperCase());
    // console.log(array);
    let temp = [];
    for (let elem of array){
        elem && temp.push(elem);
        // console.log(elem);
    }
    array = temp;

    console.log(array.join(', '))
}
das(['Hi, how are you?']);
// das(['Functions in JS can be nested, i.e. hold other functions']);