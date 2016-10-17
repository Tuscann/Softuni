function solve(input) {
    var bladeLengths = input.map(Number);
    console.log('<table border="1">' + '\n' + '<thead>' + '\n' + '<tr><th colspan=\"' + 3 + '">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>');

    for (var i = 0; i < bladeLengths.length; i++) {
        var bladeLength = Math.floor(bladeLengths[i]);

        if (bladeLength > 10) {
            var application = '';

            if (bladeLength % 5 == 0) {
                application = '*rap-poker';
            }
            else if (bladeLength % 5 == 1) {
                application = 'blade';
            }
            else if (bladeLength % 5 == 2) {
                application = 'quite a blade';
            }
            else if (bladeLength % 5 == 3) {
                application = 'pants-scraper';
            }
            else if (bladeLength % 5 == 4) {
                application = 'frog-butcher';
            }

            var type = '';
            if (bladeLength > 40) {
                type = 'sword';
            } else {
                type = 'dagger';
            }
            console.log('<tr><td>' + bladeLength + '</td><td>' + type + '</td><td>' + application + '</td></tr>');
        }
    }
    console.log('</tbody>\n</table>');
}


solve(['22.0', '23.2555', '24.368', '202.87', '203.99999', '204.785']);
//solve(['12','13','14'])
//solve(['204', '40']);
//solve(['17.8', '19.4', '13', '55.8', '126.96541651', '8', '3']);


