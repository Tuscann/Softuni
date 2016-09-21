function triangleArea([a, b, c]) {
    // [a, b, c] = [a, b, c].map(Number);
    // let sp = (a + b + c) / 2; няма конвертиране към число може да де грешен резултат
    let sp = (Number(a) + Number(b) + Number(c)) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    console.log(area);
}
triangleArea([2, 3.5, 4]);