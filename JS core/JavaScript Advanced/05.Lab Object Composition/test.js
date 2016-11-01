class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = $('<nav>', {'class': 'menu'});
    }

    _generateMenuBody() {
        return $('<header>', {'class': 'header'})
            .append($('<div>', {'class': 'header-row'})
                .append($('<a>', {'class': 'button'})
                    .html('&#9776;')
                    .click(function () {
                        $('div.drawer').toggle();
                    }))
                .append($('<span>', {'class': 'title'})
                    .text(this.title)))
            .append($('<div>', {'class': 'drawer'})
                .css('display', 'none')
                .append(this.links));
    }

    addLink(href, name) {
        this.links.append($('<a>', {'class':'menu-link'})
            .attr('href', href)
            .text(name));
    }

    appendTo(container) {
        $(container).append(this._generateMenuBody());
    }
}