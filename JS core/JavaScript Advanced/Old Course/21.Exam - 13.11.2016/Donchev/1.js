function attachEvents() {
    $('#btnDelete').on('click', function () {
        let forDelete = $('#towns').find(":selected");
        forDelete.remove();
    });

    $('#btnAdd').on('click', function () {
        let townName = $('#newItem');
        if (townName.val().trim() != '') {
            let selectBox = $('#towns');
            let newTown = $('<option>')
                .text(townName.val());

            selectBox.append(newTown);
        }

        townName.val('');
    });
}