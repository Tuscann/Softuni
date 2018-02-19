function test3(input) {
    let surveyRegex = /<svg>((.|\n)*?)<\/svg>/g;
    let format = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
    let valuesRegex = /\s*<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;
    let matches = surveyRegex.exec(input);
    let validMatches = [];
    let survey = '';
    let values = '';

    if (matches) {
        while (matches) {
            let match = matches[1];
            let isValid = format.exec(match);
            if (isValid) {
                validMatches.push(match);
                survey = isValid[3];
                values = isValid[7];
            }
            matches = surveyRegex.exec(input);
        }

        if (validMatches.length > 0) {
            let sum = 0;
            let votes = 0;
            let valuesMatches = valuesRegex.exec(values);
            while (valuesMatches) {
                let value = Number(valuesMatches[1]);
                let count = Number(valuesMatches[2]);

                if (value > 0 && value <= 10) {
                    sum += value * count;
                    votes += count;
                    valuesMatches = valuesRegex.exec(values);
                }
            }

            let average = parseFloat((sum / votes).toFixed(2));
            if (votes === 0) {
                average = 0;
            }
            console.log(`${survey}: ${average}`);

        } else {
            console.log('Invalid format');
        }
    } else {
        console.log('No survey found');
    }
}
test3("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food -\n" + "General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</\n" + "g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");
test3("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat>\n" + "<cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg");
test3("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great,don't mess with it!</p><p>I'd like to have the option for delivery</p>");
test3("<svg><cat><text>Which is your favourite meal from our\n" + "selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><va\n" + "l>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>\n");