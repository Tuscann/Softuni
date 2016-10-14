function a(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let string = '<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';

    for (let i = start; i <= end; i++) {

        function isFib(val) {

            if (val>1){var prev = 0;
                var curr = 1;
                while (prev <= val) {
                    if (prev == val) {

                        return 'yes';
                    }
                    curr = prev + curr;
                    prev = curr - prev;
                }
                return 'no';}
            else if(val==1) {
                return 'yes'
            }

        }

        string += '<tr><td>' + i + '</td><td>' + i * i + '</td><td>' + isFib(i) + '</td></tr>\n';
    }
    console.log(string + '</table>');
}
// a(['2', '6']);
// a(['0', '0']);
a(['1', '1']);