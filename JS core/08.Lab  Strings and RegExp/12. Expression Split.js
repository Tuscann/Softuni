function az(input) {
    let expression = input[0];
    let elements = expression.split(/[\s.();,]+/).filter(each => each != '');

    console.log(elements.join("\n"));
}
az(['let sum = 4 * 4,b = "wow";']);
// az(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);