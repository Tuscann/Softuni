function a(args) {

    let regex = /([^=&?]+)=([^=&?]+)/g;
    let whitespaceRegex = /(\+|%20)+/g;
    let curentLine;
    let lineObject;
    let lineIndex;
    let key;
    let value;
    let match;
    let output;
    let i;

    for (let lineIndex in args) {

        lineObject={};
        curentLine = args[lineIndex];

        match = regex.exec(curentLine);

        while (match) {
            key = match[1].replace(whitespaceRegex, ' ').trim();
            value = match[2].replace(whitespaceRegex, ' ').trim();

            if (!lineObject[key]) {
                lineObject[key] = [];
            }
            lineObject[key].push(value);
            match = regex.exec(curentLine);
        }
        for ( i in lineObject) {
            output += i + '=[' + lineObject[i].join(', ') + ']';
        }
        console.log(output);
    }


}
a(['login++=student&password=student']);
// a(['foo=%20foo&value=+val&foo+=5+%20+203','foo=poo%20&value=valley&dog=wow+']);