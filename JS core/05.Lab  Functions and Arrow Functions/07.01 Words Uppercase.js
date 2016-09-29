function solve ([input]) {
    console.log(input
        .toUpperCase()
        .split(/\W+/)
        .filter(w=>w!='')
        .join(', '));
}
solve(['Hi, how are you?']);
solve(['Functions in JS can be nested, i.e. hold other functions']);