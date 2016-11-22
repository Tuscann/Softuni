function loadCommits() {
    let username = $('#username').val();
    let repo = $('#repo').val();
    let github = "https://api.github.com/repos/";

    console.log(username);
    console.log(repo);

    let address = github + username + "/" + repo + "/commits";

    $.get(address).then(displayCommits).catch(Errors);

    function displayCommits(commits) {
        for (let cometssss of commits)
            $("#commits").append($("<li>").text(
                cometssss.commit.author.name + ": " +
                cometssss.commit.message
            ));
    }

    function Errors(err) {
        $("#commits").append($("<li>").text(
            "Error: " + err.status+" (" + err.statusText+')'
        ))
    }


}