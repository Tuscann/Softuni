//DOM
class TitleBar {
    constructor (pageTitle) {
        this.title = pageTitle;
        this.list = $('<nav class="menu">');
    }

    addLink (href, linkName) {
        let newLink = $(`<a class="menu-link" href="${href}">${linkName}</a>`);
        this.list.append(newLink);
    }

    appendTo (selector) {
        let titleSpan = $(`<span class="title">${this.title}</span>`);

        // create menu button and append event to it
        let visibilityButton = $('<a class="button">&#9776;</a>');

        visibilityButton.click(() => {
            let menuContainer = $('.drawer');

            if (menuContainer.css('display').toLowerCase() === 'block') {
                menuContainer.css('display', 'none');
            } else {
                menuContainer.css('display', 'block');
            }
        });

        let headerRow = $('<div class="header-row">');
        headerRow.append(visibilityButton);
        headerRow.append(titleSpan);

        let drawer = $('<div class="drawer"></div>');
        drawer.css('display', 'none');
        drawer.append(this.list);

        let header = $('<header class="header"></header>');
        header.append(headerRow);
        header.append(drawer);

        $(selector).prepend(header);
    }
}