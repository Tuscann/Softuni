function multiplicationTable(input) {
    let size = Number(input[0]);
    let table = "<table border='1'>\n";
    table += "<tr>\n" + "<th>" + "x" + "</th>\n";
    for (let i = 1; i <= size; i++) {
        table += "<th>" + `${i}` + "</th>\n";
    }
    table+="</tr>\n";
    for (let row = 1; row <= size; row++) {
        table += "<tr>";

        for (let col = 1; col <= size; col++) {
            if(col==1) {
                table += "<th>" + `${col * row}` + "</th>\n";
            }
            table += "<td>" + `${col * row}` + "</td>\n";
        }
        table+="<tr>";
    }

    table += "</table>";

    return table;
}
console.log(multiplicationTable(['3']));