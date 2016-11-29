function startApp() {
    //sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkLisAds').click(listAdverts);
    $('#linkCreateAd').click(showCreateAdView);
    $('#linkLogout').click(logoutUser);


    $('#buttonLoginUser').click(loginUser);
    $('#buttonRegisterUser').click(registerUser);
    $('#buttonCreateAd').click(createAdvert);
    $('#buttonEditAd').click(editAdvert);


    $('#infoBox, #errorBox').click(function () {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function () {$('#loadingBox').show()},
        ajaxStop: function () { $('#loadingBox').hide()}
    });
}

