function a([input]) {
    let regEx = /\b_([A-Za-z0-9]+)\b/g;  // \b - разстояние преди думата и след думата

    let empty = [];
    let match;

    while ( match = regEx.exec(input)) {
        empty.push(match[1]); // вземаме първия член защото така работи match
    }
    return empty.join(',')
}
console.log(a(['Calculate the _area of the _perfectRectangle object.']));
console.log(a(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']));



