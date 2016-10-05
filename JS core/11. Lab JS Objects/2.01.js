function scoreToHtml(scoreStr) {
    let scoreArr = JSON.parse(scoreStr);

    let html = '<table>\n';

    html += `\t<tr><th>name</th><th>score</th></tr>\n`;

    function htmlEscape(text) {
        text = text.toString();
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>':'&gt;'};
        return text.replace(/[\"&'<>"]/g, ch => map[ch]);
    }

    for (let score of scoreArr){
        html += '\t<tr>';
        html += `<td>${htmlEscape(score['name'])}</td><td>${htmlEscape(score['score'])}</td>`;
        html +=  `</tr>\n`;
    }

    html += '</table>';
    return html;

}
console.log(scoreToHtml(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));