function startApp() {
    // Config
    const baseUrl = 'https://baas.kinvey.com/';
    const appId = 'kid_B1MkvH7zg';
    const appPass = 'dc07085834814f5988bbf31bc3b73316';
    const base64Auth = `${btoa(appId + ':' + appPass)}`;

    // Process
    bindMainMenuEvents();
    bindActionEvents();
    renderMainMenu();
    renderView('viewHome');

    /**     * Bind events     */
    function bindMainMenuEvents() {
        $('header a').on('click', (event) => {
            let name = formatViewName($(event.target).attr('id'), 4);
            renderView(name);
        });
    }

    function bindActionEvents() {
        $(document).on({
            ajaxStart: () => $('#loadingBox').show(),
            ajaxStop: () => {
                $('#loadingBox').hide()
            }
        });

        $('#buttonRegisterUser').on('click', () => processRegistration('#formRegister'));
        $('#buttonLoginUser').on('click', () => processLogin('#formLogin'));
        $('#buttonCreateAd').on('click', () => processCreateAd('#formCreateAd'));
    }

    /**
     * Main logic
     */
    function processRegistration(formId) {
        let username = $(formId).find('input[name="username"]').val().trim();
        let password = $(formId).find('input[name="passwd"]').val().trim();

        if (!isEmpty([username, password])) {
            clearInputs(formId);
            $.ajax({
                method: 'POST',
                url: baseUrl + 'user/' + appId,
                headers: {Authorization: `Basic ${base64Auth}`},
                contentType: 'application/json',
                data: JSON.stringify({username, password})
            })
                .then(completeRegistration)
                .catch(errorHandler)
        }

        function completeRegistration(userData) {
            updateSessionData(userData);
            renderMainMenu();
            renderView('viewHome');
            renderMessage('info', 'Successfully registered!');
        }
    }

    function processLogin(formId) {
        let username = $(formId).find('input[name="username"]').val().trim();
        let password = $(formId).find('input[name="passwd"]').val().trim();

        if (!isEmpty([username, password])) {
            clearInputs(formId);
            $.ajax({
                method: 'POST',
                url: baseUrl + 'user/' + appId + '/login',
                headers: {Authorization: `Basic ${base64Auth}`},
                contentType: 'application/json',
                data: JSON.stringify({username, password})
            })
                .then(completeLogin)
                .catch(errorHandler)
        }

        function completeLogin(userData) {
            updateSessionData(userData);
            renderMainMenu();
            renderView('viewHome');
            renderMessage('info', 'Successfully logged in!');
        }
    }

    function processCreateAd(formId) {
        let title = $(formId).find('input[name="title"]').val().trim();
        let description = $(formId).find('textarea[name="description"]').val().trim();
        let datePublished = $(formId).find('input[name="datePublished"]').val().trim();
        let price = Number($(formId).find('input[name="price"]').val().trim());
        let image = $(formId).find('input[name="image"]').val().trim();


        if (!isEmpty([title, description, datePublished]) && !isNaN(price)) {
            $.ajax({
                method: 'POST',
                url: baseUrl + 'appdata/' + appId + '/ads',
                headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                contentType: 'application/json',
                data: JSON.stringify({
                    title,
                    description,
                    author: sessionStorage.getItem('user'),
                    date: datePublished,
                    price
                })
            })
                .then(completeAdCreation)
                .catch(errorHandler)
        }

        function completeAdCreation() {
            clearInputs(formId);
            renderView('viewAd');
            renderMessage('info', 'Add created!');
        }
    }

    function processAds() {
        $('#ads').find('table').find('.data').remove();
        $.ajax({
            method: 'GET',
            url: baseUrl + 'appdata/' + appId + '/ads',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(renderAds)
            .catch(errorHandler)
    }

    /**
     * Display content
     */
    function renderMainMenu() {
        $('#menu').find('a').hide();
        if (!isLoggedIn()) {
            $('#linkHome, #linkLogin, #linkRegister').show();
        } else {
            $('#linkHome, #linkAd, #linkCreateAd, #linkLogout, #loggedInUser').show();
        }
    }

    function renderView(name) {
        $('body section').hide();
        $('body section#' + name).show();

        if (name == 'viewLogout') {
            logout();
        } else if (name == 'viewAd') {
            processAds();
        }
    }

    function renderAds(ads) {
        let table = $('#ads').find('table');

        for (let ad of ads) {
            let row = $('<tr class="data">');
            row.append($('<td>').text(ad.title), $('<td>').text(ad.author),
                $('<td>').text(ad.description), $('<td>').text(ad.price), $('<td>').text(ad.date));
            appendAdminCell(row, ad);
            table.append(row);
        }

        function appendAdminCell(row, ad) {
            let deleteLink = $('<a href="#">[Delete]</a>').on('click', () => deleteAd(ad._id));
            let editLink = $('<a href="#">[Edit]</a>').on('click', () => editAd(ad));
            if (ad._acl.creator === sessionStorage.getItem('userId')) {
                row.append($('<td>').append(deleteLink, ' ', editLink));
            }

            function deleteAd(id) {
                $.ajax({
                    method: 'DELETE',
                    url: baseUrl + 'appdata/' + appId + '/ads/' + id,
                    headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                })
                    .then(function () {
                        renderView('viewAd');
                        renderMessage('info', 'Ad successfully deleted!');
                    })
                    .catch(errorHandler)
            }

            function editAd(ad) {
                renderView('viewEditAd');
                let form = $('#formEditAd');
                form.find('input[name="title"]').val(ad.title);
                form.find('textarea[name="description"]').val(ad.description);
                form.find('input[name="author"]').val(ad.author);
                form.find('input[name="datePublished"]').val(ad.date);
                form.find('input[name="price"]').val(ad.price);
                form.find('input[name="image"]').val(ad.image);

                form.find('#buttonEditAd').on('click', function () {
                    let title = form.find('input[name="title"]').val().trim();
                    let description = form.find('textarea[name="description"]').val().trim();
                    let datePublished = form.find('input[name="datePublished"]').val().trim();
                    let price = Number(form.find('input[name="price"]').val().trim());
                    let image = form.find('input[name="image"]').val().trim();

                    if (!isEmpty([title, description, datePublished]) && !isNaN(price)) {
                        $.ajax({
                            method: 'PUT',
                            url: baseUrl + 'appdata/' + appId + '/ads/' + ad._id,
                            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                            contentType: 'application/json',
                            data: JSON.stringify({
                                title,
                                description,
                                author: sessionStorage.getItem('user'),
                                date: datePublished,
                                price
                            })
                        })
                            .then(completeUpdate)
                            .catch(errorHandler)
                    }
                });

                function completeUpdate() {
                    renderView('viewAd');
                    renderMessage('info', 'Ad updated successfully!')
                }
            }
        }
    }

    function logout() {
        $.ajax({
            method: 'POST',
            url: baseUrl + 'user/' + appId + '/_logout',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`}
        })
            .then(function () {
                sessionStorage.clear();
                renderMainMenu();
                renderView('viewHome');
                renderMessage('info', 'Successfully logged out!');
            })
            .catch(errorHandler);
    }

    function renderMessage(type, text, autoHide = true, clickToClose = true) {
        let box = $('#' + type + 'Box');
        box.text(text).fadeIn(500);

        if (clickToClose) {
            box.on('click', function () {
                $(this).fadeOut()
            });
        }

        if (autoHide) {
            setInterval(function () {
                box.fadeOut()
            }, 2500)
        }
    }

    /**
     * Helper functions
     */
    function isLoggedIn() {
        return sessionStorage.getItem('token') && sessionStorage.getItem('user');
    }

    function formatViewName(str, removeChars = 0) {
        str = str.substr(removeChars);
        return 'view' + str.charAt(0).toUpperCase() + str.slice(1);
    }

    function clearInputs(parentId) {
        $(parentId).find('input[name]').val('');
    }

    function isEmpty(params) {
        for (let param of params) {
            if (param === '') {
                return true;
            }
        }

        return false;
    }

    function updateSessionData(userData) {
        sessionStorage.clear();
        sessionStorage.setItem('user', userData.username);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('token', userData._kmd.authtoken);
    }

    function errorHandler(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = "Cannot connect due to network error.";
        }
        if (response.responseJSON &&
            response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }

        renderMessage('error', errorMsg, false);
    }
}