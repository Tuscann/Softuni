function queryMess(queries) {
    for (let query of queries) {
        if (query.indexOf('?') >= 0) {
            query = query.split('?')[1];
        }

        let keys = new Map;
        let tokens = query
            .replace(/%20|\+/g, ' ')
            .split(/&|=/)
            .map(e => e.trim())
            .map(e => e.replace(/\s+/g, ' '));tokens


        for (let i = 0; i < tokens.length; i += 2) {
            if (!keys.has(tokens[i])) {
                keys.set(tokens[i], [])
            }
            keys.get(tokens[i]).push(tokens[i + 1])
        }

        let output = '';
        [...keys.keys()].forEach(k => output += `${k}=[${keys.get(k).join(', ')}]`);
        console.log(output);
    }
}

queryMess(["field=value1&field=value2&field=value3","http://example.com/over/there?name=ferret"]);
// queryMess(["foo=%20foo&value=+val&foo+=5+%20+203", "foo=poo%20&value=valley&dog=wow+", "url=https://softuni.bg/trainings/coursesinstances/details/1070", "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"]);