(function () {
    let id = 1;
    return function (selector, title, author, isbn) {
        let newBookId = `#book${id}`;

        let newBook = $("<div>");
        newBook.attr("id", "book" + id);
        newBook.appendTo(selector);

        let newTitle = $("<p>");
        newTitle.addClass("title");
        newTitle.text(title);
        newTitle.appendTo(newBook);

        let newAuthor = $("<p>");
        newAuthor.addClass("author");
        newAuthor.text(author);
        newAuthor.appendTo(newBook);

        let newISBN = $("<p>");
        newISBN.addClass("isbn");
        newISBN.text(isbn);
        newISBN.appendTo(newBook);

        let selectBtn = $("<button>");
        let deselectBtn = $("<button>");
        selectBtn.text("Select");
        deselectBtn.text("Deselect");
        selectBtn.appendTo(newBook);
        deselectBtn.appendTo(newBook);

        selectBtn.on("click", function () {
            $(newBookId).css("border", "2px solid blue");
        });
        deselectBtn.on("click", function () {
            $(newBookId).css("border", "none");
        });

        id++;
    }
}());