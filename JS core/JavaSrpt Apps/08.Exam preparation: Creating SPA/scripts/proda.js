function startApp() {

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_SkJltdBfl";
    const kinveyAppSecret =
        "4292f7c2fdc94ae6a2682923f9222627";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    sessionStorage.clear(); // Clear user auth data

    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAds);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);

    // Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        } else {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        }
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function listAds() {
        $('#ads').empty();
        showView('viewAds');
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts",
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(ads) {
            showInfo('Adverts loaded.');
            if (ads.length == 0) {
                $('#ads').text('No ads in the library.');
            } else {
                let adsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th><th>Description</th>',
                        '<th>Publisher</th><th>Date Published</th>',
                        '<th>Price</th><th>Actions</th>'));
                for (let ad of ads)
                    appendAdRow(ad, adsTable);
                $('#ads').append(adsTable);
            }
        }

        function appendAdRow(ad, adsTable) {
            let links = [];
            if (ad._acl.creator == sessionStorage['userId']) {
                let deleteLink = $('<a href="#">[Delete]</a>')
                    .click(function () {
                        deleteAd(ad)
                    });
                let editLink = $('<a href="#">[Edit]</a>')
                    .click(function () {
                        loadAdForEdit(ad)
                    });
                links = [deleteLink, ' ', editLink];
            }

            adsTable.append($('<tr>').append(
                $('<td>').text(ad.title),
                $('<td>').text(ad.description),
                $('<td>').text(ad.publisher),
                $('<td>').text(ad.date),
                $('<td>').text(ad.price),
                $('<td>').append(links)
            ));
        }
    }

    function createAd() {
        let adData = {
            title: $('input[name="title"]').val(),
            description: $('textarea[name="description"]').val(),
            publisher: sessionStorage.getItem('username'),
            date: $('input[name="datePublished"]').val(),
            price: Math.round($('input[name="price"]').val() * 100) / 100
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts",
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: createAdSuccess,
            error: handleAjaxError
        });

        function createAdSuccess(response) {
            listAds();
            showInfo('Advert created.');
        }
    }

    function editAd() {
        let adData = {
            title: $('input[name="title"]').val(),
            description: $('textarea[name="description"]').val(),
            publisher: sessionStorage.getItem('username'),
            date: $('input[name="datePublished"]').val(),
            price: Math.round($('input[name="price"]').val() * 100) / 100
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + $('#formEditAd input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: editAdSuccess,
            error: handleAjaxError
        });

        function editAdSuccess(response) {
            listAds();
            showInfo('Advert edited.');
        }
    }

    function deleteAd(ad) {
        $.ajax({
            method: "DELETE",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: deleteAdSuccess,
            error: handleAjaxError
        });
        function deleteAdSuccess(response) {
            listAds();
            showInfo('Advert deleted.');
        }
    }

    function loadAdForEdit(ad) {

        let req = {
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + ad._id,
            headers: getKinveyUserAuthHeaders()
        };

        $.ajax(req)
            .then(loadAdForEditSuccess)
            .catch(handleAjaxError);

        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=datePublished]').val(ad.date);
            $('#formEditAd input[name=price]').val(ad.price);
            showView('viewEditAd');
        }
    }

    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }
    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        $('#loggedInUser').text(
            "Welcome, " + username + "!");
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }
}