function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}
function showHideMenuLinks() {
    $('#linkHome').show();
    if (sessionStorage.getItem('authToken') == null) {
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
    }
    else {
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
        $('#loggedInUser').text('Hello, ' + $('#formLogin input[name=username]').val()).show();
    }
}

function showHomeView() {
    showView('viewHome')
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
function showListAdsView() {
    showView('viewAds');
}
