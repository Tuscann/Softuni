function a(input) {
    input = input.map(Number);
    let str = '';
    str += '<table border="1">' + '\n' + '<thead>' + '\n' + '<tr><th colspan=\"' + 3 + '">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < input.length; i++) {

        input[i] = Math.floor(Number(input[i]));
        if (input[i] > 10) {
            let type = '';

            if (input[i] <= 40) {
                type = 'dagger';
            }
            else {
                type = 'sword'
            }
            let fingerWidths = '';
            if (i % 5 == 0) {
                fingerWidths = 'quite a blade';
            }
            else if (i % 5 == 1) {
                fingerWidths = 'frog-butcher';
            }
            else if (i % 5 == 2) {
                fingerWidths = 'pants-scraper';
            }
            else if (i % 5 == 3) {
                fingerWidths = '*rap-poker';
            }
            else if (i % 5 == 4) {
                fingerWidths = 'blade';
            }

            str += '<tr><td>' + input[i] + '</td><td>' + type + '</td><td>' + fingerWidths + '</td></tr>' + '\n';
        }
    }
    console.log(str + '</tbody>\n</table>');
}
a(['12', '13', '14']);
//a(['17.8', '19.4', '13', '55.8', '126.96541651', '8', '3']);