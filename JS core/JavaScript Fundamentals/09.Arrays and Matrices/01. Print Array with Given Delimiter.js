function printArrayWithGivenDelimiter(input) {

    let delimiter = String(input[input.length - 1]);

    let print = "";

    for (let i = 0; i < input.length -1; i++) {
        print += input[i] + delimiter;
    }
    print = print.substring(print.length-1 , 0);
    console.log(print);


}
printArrayWithGivenDelimiter(['one', 'two', 'three', '=']);