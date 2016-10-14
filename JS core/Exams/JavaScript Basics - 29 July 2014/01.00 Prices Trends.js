function a(input) {
    let str = '<table><tr><th>Price</th><th>Trend</th></tr>\n';

    for (i = 0; i < input.length; i++) {

        let bigger = '';
        if (input[i] < input[i + 1]) {
            bigger = '<img src="up.png"/>'
        }
        else if (input[i + 1] == input[i]) {
            bigger = '<img src="fixed.png"/>'
        }
        else if (input[i] > input[i + 1]) {
            bigger = '<img src="down.png"/>'
        }
        str += '<tr><td>' + Number(input[i]).toFixed(2) + '</td><td>' + bigger + '</td></tr>\n';


        //+ Number(input[i]).toFixed(2) + '</td><td>'+'</td></tr>';
        //+'<img src="fixed.png"/>'
    }


    console.log(str);
}
a(['50', '60']);