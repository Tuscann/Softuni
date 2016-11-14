function attachEvents() {
    $('#btnDelete').on('click', function () {
        let isThere = false;
        let obj;
        for (let town of $('#towns').find('option')) {
            if ($(town).text() == $('#townName').val()) {
                $(town).remove();
                $('#result').text(`${$('#townName').val()}`);
                isThere = true
            }
        }
        if (!isThere) {
            $('#result').text(`${$('#townName').val()} not found.`)
        }
        $('#townName').val('')
    })
}