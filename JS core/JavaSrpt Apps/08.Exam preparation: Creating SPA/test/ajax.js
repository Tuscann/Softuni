function listAdverts() {
    $('#ads').empty();
    showView('viewAds');

    const kinveyAdvertsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts";
    const kinveyAuthHeaders = {
        "Authorization": "Kinvey " + sessionStorage.getItem('authToken'),
    };

    $.ajax({
        method: "GET",
        url: kinveyAdvertsUrl,
        headers: kinveyAuthHeaders,
        success: loadAdvertsSuccess,
        error: handleAjaxError
    });

    function loadAdvertsSuccess(adverts) {
        showInfo('Advertisements loaded.');
        if (adverts.length == 0) {
            $('#ads').text('No advertisements aviliable.')
        }
        else {

            let advertsTable = $('<table>')
                .append($('<tr>').append(
                    '<th>Title</th>',
                    '<th>Description</th>',
                    '<th>Publisher</th>',
                    '<th>Date Published</th>',
                    '<th>Price</th>',
                    '<th>Actions</th>')
                );

            for (let advert of adverts) {
                let detailLink = $(`<a data-id="${advert._id}" href="#">[Read More]</a>`)
                    .click(function () {displayAdvert($(this).attr("data-id")) });
                let links = [detailLink];
                if (advert._acl.creator == sessionStorage['userId']) {
                    let deleteLink = $(`<a data-id="${advert._id}" href="#">[Delete]</a>`)
                        .click(function () {deleteAdvert($(this).attr("data-id")) });
                    let editLink = $(`<a data-id="${advert._id}" href="#">[Edit]</a>`).click(function ()
                    { loadAdvertForEdit($(this).attr("data-id"))});
                    links = [deleteLink,' ',detailLink, ' ', editLink];
                }
                advertsTable.append($('<tr>').append(
                    $('<td>').text(advert.title),
                    $('<td>').text(advert.description),
                    $('<td>').text(advert.publisher),
                    $('<td>').text(advert.datePublished),
                    $('<td>').text(advert.price),
                    $('<td>').append(links)
                ));
            }
            $('#ads').append(advertsTable);
        }
        console.log($('#ads').text());
    }
}

function createAdvert() {
    const kinveyAthHeaders = {
        'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    };

    const kinveyUserUrl = `${kinveyBaseUrl}user/${kinveyAppKey}/${sessionStorage.getItem('userId')}`;

    $.ajax({
        method: "GET",
        url: kinveyUserUrl,
        headers: kinveyAthHeaders,
        success: afterPublisherRequest,
        error: showError
    });

    function afterPublisherRequest(publisher) {
        let advertData = {
            title: $('#formCreateAd input[name=title]').val(),
            description: $('#formCreateAd textarea[name=description]').val(),
            publisher: publisher.username,
            datePublished: $('#formCreateAd input[name=datePublished]').val(),
            price: Number($('#formCreateAd input[name=price]').val()),
            image: $('#formCreateAd input[name=image]').val()
        };

        const kinveyAdvertsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts";

        $.ajax({
            method: "POST",
            url: kinveyAdvertsUrl,
            headers: kinveyAthHeaders,
            data: advertData,
            success: createAdvertSuccess,
            error: handleAjaxError
        });

        function createAdvertSuccess(responce) {
            listAdverts();
            showInfo('Advertisement created.')
        }

    }
}

function deleteAdvert(advertId) {
    const kinveyBookUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + advertId;
    const kinveyAuthHeaders = {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};

    $.ajax({
        method: "DELETE",
        url: kinveyBookUrl,
        headers: kinveyAuthHeaders,
        success: deleteBookSuccess,
        error: handleAjaxError
    });

    function deleteBookSuccess(responce) {
        listAdverts();
        showInfo('Advert deleted.')
    }

}

function loadAdvertForEdit(advertId) {

    const kinveyBookUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + advertId;
    const kinveyAuthHeaders = {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};

    $.ajax({
        method: "GET",
        url: kinveyBookUrl,
        headers: kinveyAuthHeaders,
        success: loadAdvertForEditSuccess,
        error: handleAjaxError
    });

    function loadAdvertForEditSuccess(advert) {
        $('#formEditAd input[name=id]').val(advert._id);
        $('#formEditAd input[name=title]').val(advert.title);
        $('#formEditAd input[name=publisher]').val(advert.publisher);
        $('#formEditAd input[name=description]').val(advert.description);
        $('#formEditAd input[name=datePublished]').val(advert.datePublished);
        $('#formEditAd input[name=price]').val(advert.price);
        $('#formEditAd input[name=image]').val(advert.image);
        showView('viewEditAd');
    }
}

function editAdvert() {
    const kinveyAdverUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + $('#formEditAd input[name=id]').val();
    const kinveyAuthHeaders = {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};

    let advertData = {
        title: $('#formEditAd input[name=title]').val(),
        description: $('#formEditAd input[name=description]').val(),
        publisher: $('#formEditAd input[name=publisher]').val(),
        datePublished: $('#formEditAd input[name=datePublished]').val(),
        price: $('#formEditAd input[name=price]').val(),
        image: $('#formEditAd input[name=image]').val()
    };

    $.ajax({
        method: "PUT",
        url: kinveyAdverUrl,
        headers: kinveyAuthHeaders,
        data: advertData,
        success: editAdvertSuccess,
        error: handleAjaxError
    });

    function editAdvertSuccess(response) {
        listAdverts();
        showInfo('Advertisement edited');
    }
}

function displayAdvert(advertId) {
    const kinveyAdUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + advertId;
    const kinveyAuthHeaders = {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};

    $.ajax({
        method: "GET",
        url: kinveyAdUrl,
        headers: kinveyAuthHeaders,
        success: displayAdvertSuccess,
        error: handleAjaxError
    });

    $('#viewDetailsAd').empty();

    function displayAdvertSuccess(advert) {
        let html=$('<div>');
        html.append(
            $('<img>').attr('src',advert.image),
            $('<br>'),
            $('<label>').text('Price'),
            $('<h1>').text(advert.price),
            $('<label>').text('Title'),
            $('<h1>').text(advert.title),
            $('<label>').text('Description:'),
            $('<p>').text(advert.description),
            $('<label>').text('Publisher:'),
            $('<div>').text(advert.publisher),
            $('<label>').text('Date:'),
            $('<div>').text(advert.datePublished)
        );
        html.appendTo($('#viewDetailsAd'));
        showView('viewDetailsAd');
    }
}