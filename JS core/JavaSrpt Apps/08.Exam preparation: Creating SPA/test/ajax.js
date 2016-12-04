function listAds() {
    $('#ads').empty();
    showView('viewAd');

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

    function loadAdvertsSuccess(ads) {
        showInfo('Advertisements loaded.');
        if (ads.length == 0) {
            let p = $('<p>').text('No advertisements available.').css('text-align', 'center');
            $('#ads').append(p);
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

            for (let ad of ads) {
                let detailLink = $(`<a data-id="${ad._id}" href="#">[Read More]</a>`)
                    .click(function () {
                        displayAdvert($(this).attr("data-id"))
                    });
                let links = [detailLink];
                if (ad._acl.creator == sessionStorage['userId']) {
                    let deleteLink = $(`<a data-id="${ad._id}" href="#">[Delete]</a>`)
                        .click(function () {
                            deleteAdvert($(this).attr("data-id"))
                        });
                    let editLink = $(`<a data-id="${ad._id}" href="#">[Edit]</a>`).click(function () {
                        loadAdvertForEdit($(this).attr("data-id"))
                    });
                    links = [deleteLink, ' ', detailLink, ' ', editLink];
                }
                advertsTable.append($('<tr>').append(
                    $('<td>').text(ad.title),
                    $('<td>').text(ad.description),
                    $('<td>').text(ad.publisher),
                    $('<td>').text(ad.datePublished),
                    $('<td>').text(ad.price),
                    $('<td>').append(links)
                ));
            }
            $('#ads').append(advertsTable);
        }
        // console.log($('#ads').text());
    }
}

function createAd() {
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

        let title = $('#formCreateAd input[name=title]').val();
        let description = $('#formCreateAd textarea[name=description]').val();
        let datepublished = $('#formCreateAd input[name=datePublished]').val();
        let price = Number($('#formCreateAd input[name=price]').val());
        let image = $('#formCreateAd input[name=image]').val();


        if (title != "" && price > 0 && description != "" && image!="") {
            let advertData = {
                title: title,
                description: description,
                publisher: publisher.username,
                datePublished: datepublished,
                price: price,
                image: image
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
        }
        else{
            handleAjaxError('Please correct the input data.')
        }




        function createAdvertSuccess(responce) {
            listAds();
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
        listAds();
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

function editAd() {
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
        listAds();
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
        let html = $('<div>');
        html.append(
            $('<img>').attr('src', advert.image),
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