function attachEvents() {
    $('#btnAdd').on('click', function () {
        let townName = $('#newItem').val();
        if(townName != '') {
            let option = $('<option>').text(townName);
            $('#towns').append(option);
            $('#newItem').val('');
        }
    });

    $('#btnDelete').on('click', function () {
        let selectedOp = $('#towns option:selected');
        $('select').find(selectedOp).remove();
    })
}