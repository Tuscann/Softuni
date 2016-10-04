function scoreToHTMLTable([scoreJSON]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th>\n";

    let arr = JSON.parse(scoreJSON);

    for (let obj of arr)
        html += `  <tr><td>${htmlEscape(obj['name'])}` +
            `</td><td>${obj['score']}</td></tr>\n`;
    return html + "</table>";

    function htmlEscape(text) {

        let replaced = new String(text);

        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');

        return replaced;
    }
}
// console.log(scoreToHTMLTable(['[{"name":"Pesho","score":70}]']));
console.log(scoreToHTMLTable(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));
//console.log(scoreToHTMLTable(['[{"name":"<div>a && \'b\'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]']));
