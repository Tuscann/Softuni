function triangleArea(input) {

    let a = input[0];
    let b = input[1];
    let c = input[2];


    // let sp = (a + b + c) / 2;    /**няма конвертиране към число може да де грешен резултат**/
    let sp = (Number(a) + Number(b) + Number(c)) / 2;

    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return(area)
}
console.log(triangleArea([2, 3.5, 4]));