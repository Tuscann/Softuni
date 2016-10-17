function multiplicationTable(input) {
    let n = Number(input[0]);

    let html = '<table border="1">\n';


    html += ' <tr><th>x</th>';


    for (i = 0; i < n; i++) {
        html += html + '<th>i</th>'.repeat(n);
    }


    html += '</tr>\n';

    // for (i = 1; i <= 5; i++) {
    //
    // }
    //
    //
    // html += ' <tr><th>1</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>\n';
    // html += ' <tr><th>2</th><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr>\n';
    // html += ' <tr><th>3</th><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td></tr>\n';
    // html += ' <tr><th>4</th><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td></tr>\n';
    // html += ' <tr><th>5</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td></tr>\n';


    // html = html + '</table>';
    return html
}
console.log(multiplicationTable(['3']));