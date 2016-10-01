function a(input) {

    let string = '<ul>\n';

    for (let i = 0; i < input.length; i++) {
        let replaced = input[i];

        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');

        string += '  \<li>' + replaced + '</li>\n';

        let a1 = "&lt;"
    }
    string += '</ul>';

    console.log(string);

}
a(['<b>unescaped text</b>', 'normal text']);
 //a(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);