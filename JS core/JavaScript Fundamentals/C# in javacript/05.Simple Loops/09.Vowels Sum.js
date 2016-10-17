function sum(input) {

    let word = String(input);
    let a = word.split("a").length - 1;
    let e = word.split("e").length - 1;
    let i = word.split("number").length - 1;
    let o = word.split("o").length - 1;
    let u = word.split("u").length - 1;

    let total = a + e * 2 + number * 3 + o * 4 + u * 5;
    console.log(total);
}
sum(['hello']);
sum(['beer']);
