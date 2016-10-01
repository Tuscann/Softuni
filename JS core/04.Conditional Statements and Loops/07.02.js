function MultiplicationTable([n]) {
    console.log("<table border=\"1\">");

    let headRow = '<tr><th>x</th><th>';

    let row = '';
    for (let i = 0; i <= n; i++){
        row = '\t<tr><th>';
        for (let j = 0; j <= n; j++){
            if (i == 0){
                if (j == 0){
                    row += 'x</th><th>';
                }
                else if (j < n){
                    row += j + '</th><th>';
                }
                else{
                    row += j + '</th></tr>';
                }
            }
            else {
                if (j == 0){
                    row += i + '</th><td>';
                }
                else if (j < n){
                    row += i * j + '</td><td>';
                }
                else {
                    row += i * j + '</td></tr>';
                }
            }
        }

        console.log(row);
    }

    console.log('</table>');
}

MultiplicationTable([5]);