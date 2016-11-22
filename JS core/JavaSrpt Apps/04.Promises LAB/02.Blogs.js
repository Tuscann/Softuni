function attachEvents() {

    let url = "https://baas.kinvey.com/appdata/";
    let appkey = "kid_HkenCrlMe";

    let postsUrl = url + appkey + "/posts";
    let commentsUrl = url + appkey + "/comments";
    let auth = {'Authorization': 'Basic ' + btoa('peter:p')};

    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPosts);

    function loadPosts() {

        let a = $.get({url: postsUrl, headers: auth})
            .then(dispalayPosts)
            .catch(displayError);

    }
    function dispalayPosts(posts) {
        $('#posts').empty();

        for (let post of posts) {
            $('#posts').append($('<option>').text(post.title).val(post._id));
        }
    }


    function displayError(error) {
        let errorDiv = $('<div>').text(`Error: ${error.status} (${error.statusText})`);
        $(document.body).prepend(errorDiv);

        setTimeout(() => errorDiv.fadeOut(() => errorDiv.remove()), 3000);

    }

    function viewPosts() {
        let selectedPostId = $('#posts').val();
        if (!selectedPostId) return;

        let postsRequest = $.get({url: postsUrl + selectedPostId, headers: auth});
        let commentsRequest = $.get({url: commentsUrl + `?query={"post_id":"${selectedPostId}"}`, headers: auth});

        Promise.all([postsRequest, commentsRequest]).then(displayPostInfo).catch(displayError);
    }

    function displayPostInfo([postInfo, comments]) {
        $('#post-title').text(postInfo.title);
        $('#post-body').text(postInfo.body);
        $('#post-comments').empty();

        for (let comment of comments) {
            $('#post-comments').append($('<li>').text(comment.text));
        }
    }


}