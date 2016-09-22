/**
 * Created by 123 on 20.9.2016 г..
 */
function chess(input) {
    let n = Number(input[0]);

    let html = '<div class="chessboard">\n';

    for (let row = 1; row <= n; row++) {
        html += '  <div>\n';
        let color = 'white';
        if (row % 2 != 0) color = 'black';
        for (let col = 1; col <= n; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }
        html += '  </div>\n';
    }
    return html+"</div>";
}
console.log(chess('3'));