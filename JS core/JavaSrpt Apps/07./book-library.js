function startApp() {
    sessionStorage.clear();

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppID = "kid_rkcLxcUr";
    const kinveyAppSecret = "e234a245b3864b2eb7ee41e19b8ca4e5";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppID + ":" + kinveyAppSecret),
    };

    showHideMenuLinks();
    showView('viewHome');

    function showHideMenuLinks() {

        $("#menu a").hide();
        if (sessionStorage.getItem('authToken')) {
            $("#linkHome").show();
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListBooks").show();
            $("#linkCreateBook").show();
            $("#linkLogout").show();
        } else {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkHome").show();
            $("#linkListBooks").hide();
            $("#linkCreateBook").hide();
            $("#linkLogout").hide();
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showCreateBookView() {
        $('#formCreateBook').trigger('reset');
        showView('viewCreateBook');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " +
            sessionStorage.getItem('authToken'),
        };
    }

    function listBooks() {
        $('#books').empty();
        showView('viewBooks');

        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppID + "/books",
            headers: getKinveyUserAuthHeaders(),
            success: loadBooksSuccess,
            error: handleAjaxError
        });
    }

    function loadBooksSuccess(books) {
        showInfo('Books loaded.');
        if (books.length == 0) {
            $('#books').text('No books in the library.');
        } else {
            let table = $(`<table><tr><th>Title</th><th>Author</th><th>Description</th><th>Ations</th></tr></table>`);
            for (let book of books) {
                let tr = $('<tr>');
                displayRow(tr, books);
                tr.appendTo(table);

                function displayRow(tr, books) {

                    let links = [];
                    if(book._acl.creator==sessionStorage.getItem('userId')){
                        let deleteLink = $('<a href="#">[Delete]</a>').click(function () {
                            deleteBook(book)

                        });
                        let editLink = $('<a href="#">[Edit]</a>').click(function () {
                            loadBookForEdit(book)

                        });
                        links.push(deleteLink);
                        links.push(" ");
                        links.push(editLink);

                    }
                    tr.append(
                        $('<td>').text(book.title),
                        $('<td>').text(book.author),
                        $('<td>').text(book.description),
                        $('<td>').append(links)
                    );
                }
            }
            $('#books').append(table);
        }
    }

    function deleteBook(book) {
        $.ajax({
            method: "DELETE",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppID  + "/books/" + book._id,
            headers: getKinveyUserAuthHeaders(),
            success: deleteBookSuccess,
            error: handleAjaxError
        });
        function deleteBookSuccess(response) {
            listBooks();
            showInfo('Book deleted.');
        }
    }

    function logoutUser() {

        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppID + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });
    }

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listBooks();
        showInfo('Login successful.');
    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppID + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
    }

    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listBooks();
        showInfo('User registration successful.');
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        let userId = userInfo._id;
        let username = userInfo.username;
        sessionStorage.setItem('authToken', userAuth);
        sessionStorage.setItem('userId', userId);

        $('#loggedInUser').text(
            "Welcome, " + username + "!");
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
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

    function showError(errorMsg) {
            $('#errorBox').text("Error: " + errorMsg);
            $('#errorBox').show();

    }

    function createBook() {
        let bookData = {
            title: $('#formCreateBook input[name=title]').val(),
            author: $('#formCreateBook input[name=author]').val(),
            description: $('#formCreateBook textarea[name=descr]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppID + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: bookData,
            success: createBookSuccess,
            error: handleAjaxError
        });
        function createBookSuccess(response) {
            listBooks();
            showInfo('Book created.');
        }
    }

    function editBook() {
        let bookData = {
            title: $('#formEditBook input[name=title]').val(),
            author: $('#formEditBook input[name=author]').val(),
            description:
                $('#formEditBook textarea[name=descr]').val()
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppID +
            "/books/" + $('#formEditBook input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: bookData,
            success: editBookSuccess,
            error: handleAjaxError
        });

        function editBookSuccess(response) {
            listBooks();
            showInfo('Book edited.');
        }

    }

    function loadBookForEdit(book) {
        $.ajax({
            method: "GET",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppID + "/books/" + book._id,
            headers: getKinveyUserAuthHeaders(),
            success: loadBookForEditSuccess,
            error: handleAjaxError
        });
        function loadBookForEditSuccess(book) {
            $('#formEditBook input[name=id]').val(book._id);
            $('#formEditBook input[name=title]').val(book.title);
            $('#formEditBook input[name=author]').val(book.author);
            $('#formEditBook textarea[name=descr]').val(book.description);
            showView('viewEditBook');
        }
    }

    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListBooks").click(listBooks);
    $("#linkCreateBook").click(showCreateBookView);
    $("#linkLogout").click(logoutUser);

    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateBook").click(createBook);
    $("#buttonEditBook").click(editBook);
}