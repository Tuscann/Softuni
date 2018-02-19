function initializeTable123() {
    let table = $('#countriesTable');

    addRow(false, 'Bulgaria', 'Sofia');
    addRow(false, 'Germany', 'Berlin');
    addRow(false, 'Russia', 'Moscow');

    table.on('click', '#createLink', addRow);

    table.on('click', '#delete', function() {
        $(this).parent().parent().remove();
        showHideNavigation();
    });

    table.on('click', '#up', function() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        showHideNavigation();
    });

    table.on('click', '#down', function() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        showHideNavigation();
    });

    function showHideNavigation() {
        let lastRowIndex = $('tr').length - 1;
        $('tr').each(function() {
            let rowIndex = $(this).prevAll().length;
            if (rowIndex === 2) {
                $(this).find('#up').hide();
            } else {
                $(this).find('#up').css('display', 'inline');
            }
            if (rowIndex === lastRowIndex) {
                $(this).find('#down').hide();
            } else {
                $(this).find('#down').css('display', 'inline');
            }
        });
    }

    function addRow(_event, countryName, capitalName) {
        if (countryName === undefined && capitalName === undefined) {
            countryName = $('#newCountryText').val();
            capitalName = $('#newCapitalText').val();
        }

        let newRow = $('<tr>');
        let navigation = $('<td>')
            .append($('<a>').attr('id', 'up').attr('href', '#').text('[Up] '))
            .append($('<a>').attr('id', 'down').attr('href', '#').text('[Down] '))
            .append($('<a>').attr('id', 'delete').attr('href', '#').text('[Delete]'));

        table
            .append(newRow
                .append($('<td>').text(countryName))
                .append($('<td>').text(capitalName))
                .append(navigation)
            );
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        showHideNavigation();
    }
}