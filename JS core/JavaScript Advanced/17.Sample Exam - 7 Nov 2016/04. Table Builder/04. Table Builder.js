//DOM Tests

function tableBuilder(selector) {
    let table = $('<table>');

    function createTable(columnNames) {
        let row = $('<tr>');
        for (let col of columnNames) {
            row.append($('<th>').text(col));
        }

        row.append($('<th>').text('Action'));
        row.appendTo(table);
        attachTable();
    }

    function fillData(dataRows) {
        for (let dataRow of dataRows) {
            let row = $('<tr>');
            for (let col of dataRow) {
                row.append($('<td>').text(col));
            }

            row.append($('<td>')
                .append($('<button>')
                    .text('Delete')
                    .click((event) => $(event.target).parent().parent().remove())));

            row.appendTo(table);
        }
    }

    function attachTable() {
        let selectorElement = $(selector);
        selectorElement.empty();
        selectorElement.append(table);
    }

    return {
        createTable,
        fillData
    }
}