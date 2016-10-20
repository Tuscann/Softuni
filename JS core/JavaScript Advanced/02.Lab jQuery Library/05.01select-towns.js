function attachEvents() {

    $('#items').on('click', 'li',
        function () {
           let li = $(this);
            if (li.attr('data-selected')) {
                li.removeAttr('data-selected');
                li.css('background', '');
            } else {
                li.attr('data-selected', 'true');
                li.css('background', '#DDD');
            }
        }
    );

    $('#showTownsButton').on('click', function () {
        let selLi = $('li')
            .toArray()
            .filter(item=>$(item)
                .attr('data-selected'))
            .map(item=>$(item).text());

        $('#selectedTowns')
            .text("Selected towns: " + selLi.join(', '));
    });


}

