function attachEvents() {
    $('#btnDelete').click(deleteTowns);

    function deleteTowns() {
        let searchBox = $('#townName');
        let needle = searchBox.val();
        searchBox.val('');

        let towns = $('#towns').find('option');

        let match = false;
        for (let town of towns) {
            if ($(town).val() == needle) {
                town.remove();
                match = true;
            }
        }

        if (match) {
            $('#result').text(needle + ' deleted.');
        } else {
            $('#result').text(needle + ' not found.');
        }
    }
}