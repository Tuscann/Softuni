function attachEvents() {
    const apiUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let phoneBook = $('#phonebook');

    $('#btnLoad').on('click', loadPhoneNumbers);
    $('#btnCreate').on('click', addNewPhoneNumber);

    function loadPhoneNumbers() {
        $.ajax({
            method: 'GET',
            url: apiUrl + '.json',
            success: renderPhoneNumbers
        });
    }

    function renderPhoneNumbers(data) {
        phoneBook.empty();
        let keys = Object.keys(data);
        for (let key of keys) {
            let number = data[key];
            let li = $('<li>')
                .text(`${number.person}: ${number.phone} `)
                .append($('<button>')
                    .text('[Delete]')
                    .on('click', () => deleteEntry(key)));

            $('#phonebook').append(li);
        }
    }

    function deleteEntry(id) {
        $.ajax({
            method: 'DELETE',
            url: apiUrl + '/' + id + '.json',
            success: loadPhoneNumbers
        })
    }

    function addNewPhoneNumber() {
        let person = $('#person').val().trim();
        let phone = $('#phone').val().trim();

        if (person != '' && phone != '') {
            $.ajax({
                method: 'POST',
                data: JSON.stringify({
                    person, phone
                }),
                url: apiUrl + '.json',
                success: function () {
                    $('#person').val('');
                    $('#phone').val('');

                    loadPhoneNumbers();
                }
            })
        }
    }
}