function attachEvents() {
    let postsUrl = 'https://baas.kinvey.com/appdata/kid_B15S6I9Zl/posts/';
    let commentsUrl = 'https://baas.kinvey.com/appdata/kid_B15S6I9Zl/comments/';
    let auth = {'Authorization': 'Basic ' + btoa('peter:p')};

    $('#btnLoadPosts').click(function () {
        $.get({url: postsUrl, headers: auth}).then(displayPosts).catch(displayError);
    });

    $('#btnViewPost').click(function () {
        let selectedPostId = $('#posts').val();
        if (!selectedPostId) return;

        let postsRequest = $.get({url: postsUrl + selectedPostId, headers: auth});
        let commentsRequest = $.get({url: commentsUrl + `?query={"post_id":"${selectedPostId}"}`, headers: auth});

        Promise.all([postsRequest, commentsRequest]).then(displayPostInfo).catch(displayError);
    });

    function displayPosts(posts) {
        $('#posts').empty();

        for (let post of posts) {
            $('#posts').append($('<option>').text(post.title).val(post._id));
        }
    }

    function displayPostInfo([postInfo, comments]) {
        $('#post-title').text(postInfo.title);
        $('#post-body').text(postInfo.body);

        console.log(postInfo.title);

        $('#post-comments').empty();

        for (let comment of comments) {
            $('#post-comments').append($('<li>').text(comment.text));
        }
    }

    function displayError(error) {
        let errorDiv = $('<div>').text(`Error: ${error.status} (${error.statusText})`);
        $(document.body).prepend(errorDiv);

        setTimeout(() => errorDiv.fadeOut(() => errorDiv.remove()), 3000);
    }

}