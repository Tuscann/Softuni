function chessboard(size) {
    let chessboard = '<div class="chessboard">\n';

    for (let row = 0; row < size; row++) {
        let color = '';
        chessboard+="  <div>\n";
        for (let col = 0; col < size; col++) {
            if(row % 2 == 0) {
                if(col%2 ==0) {
                    color="black";
                }
                else {
                    color="white";
                }
            }
            if(row % 2 != 0) {
                if(col%2 !=0) {
                    color="black";
                }
                else {
                    color="white";
                }
            }
            chessboard += `\t<span class="${color}"></span>\n`;

        }
        chessboard+="  </div>\n"
    }
    chessboard += '</div>';
    return chessboard;
}
console.log(chessboard(['4']));