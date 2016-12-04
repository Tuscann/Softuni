const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_rk-2oS4ze";
const kinveyAppSecret = "736804a668784622997b9f61bcb3986d";

function loginUser() {
    const kinveyloginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
    const kinveyAuthHeaders = {
        "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };
    let userData = {
        username: $('#formLogin input[name=username]').val(),
        password: $('#formLogin input[name=passwd]').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyloginUrl,
        headers: kinveyAuthHeaders,
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

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    $('#loggedInUser').text("Welcome, " + username + "!")
}

function registerUser() {
    const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
    const kinveyAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };
    let userData = {
        username: $('#formRegister input[name=username]').val(),
        password: $('#formRegister input[name=passwd]').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyRegisterUrl,
        headers: kinveyAuthHeaders,
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
    showInfo('Logout successful.')
}