function aza(input) {

    let string = String(input);

    let o = '';
    for (let i = string.length - 1; i >= 0; i--) {
        o += string[i];
    }
    o = o.split(',').join('');
    console.log(o);
}
aza(['I', 'am', 'student']);
aza(['race', 'car']);