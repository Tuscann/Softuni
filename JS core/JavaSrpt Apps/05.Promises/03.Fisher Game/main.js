function attachEvents() {
    const appId = 'kid_r1Wv9O6bl';
    const username = 'user';
    const password = 'pass';
    const base64Auth = btoa(`${username}:${password}`);
    const authorizationHeader = {Authorization: `Basic ${base64Auth}`};
    const apiUrl = `https://baas.kinvey.com/appdata/${appId}/biggestCatches/`;
    const catchesContainer = $('#catches');

    bindEvents();

    // CRUD
    function createCatch() {
        let data = parseInputData('#addForm');
        if (data) {
            $.post({
                url: apiUrl,
                headers: authorizationHeader,data,
                contentType: 'application/json'
            })
                .then(readCatches)
                .catch(renderError);
        }
    }

    function readCatches() {
        $.get({
            url: apiUrl,
            headers: authorizationHeader
        })
            .then(processCatches)
            .catch(renderError)
    }

    function updateCatch(id) {
        let data = parseInputData(id, true);
        if (data) {
            $.ajax({
                method: 'PUT',
                url: apiUrl + id,
                headers: authorizationHeader,
                data: data,
                contentType: 'application/json'
            })
                .then(readCatches)
                .catch(renderError);
        }
    }

    function deleteCatch(id) {
        $.ajax({
            method: 'DELETE',
            url: apiUrl + id,
            headers: authorizationHeader
        })
            .then(readCatches)
            .catch(renderError);
    }

    // Logic
    function processCatches(data) {
        catchesContainer.empty();
        for (let item of data) {
            renderCatch(item);
        }
    }

    function renderCatch(catchData) {
        let catchElement = $('<div>')
            .addClass('catch')
            .attr('data-id', catchData._id)
            .append($('<label>').text('Angler'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('angler')
                .val(catchData.angler))
            .append($('<label>').text('Weight'))
            .append($('<input>')
                .attr('type', 'number')
                .addClass('weight')
                .val(catchData.weight))
            .append($('<label>').text('Species'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('species')
                .val(catchData.species))
            .append($('<label>').text('Location'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('location')
                .val(catchData.location))
            .append($('<label>').text('Bait'))
            .append($('<input>')
                .attr('type', 'text')
                .addClass('bait')
                .val(catchData.bait))
            .append($('<label>').text('Capture Time'))
            .append($('<input>')
                .attr('type', 'number')
                .addClass('captureTime')
                .val(catchData.captureTime));

        catchElement
            .append($('<button>')
                .addClass('update').text('Update').on('click', () => updateCatch(catchData._id)))
            .append($('<button>')
                .addClass('delete').text('Delete').on('click', () => deleteCatch(catchData._id)));

        catchesContainer.append(catchElement);
    }

    function parseInputData(selector, put = false) {
        if (put) {
            selector = $('#catches').find('[data-id="' + selector + '"]');
        }

        let angler = $(selector).find('.angler').val().trim();
        let weight = $(selector).find('.weight').val().trim();
        let species = $(selector).find('.species').val().trim();
        let location = $(selector).find('.location').val().trim();
        let bait = $(selector).find('.bait').val().trim();
        let captureTime = $(selector).find('.captureTime').val().trim();

        if (angler != '' && weight != '' && species != '' &&
            location != '' && bait != '' && captureTime != '') {
            weight = Number(weight);
            captureTime = Number(captureTime);
            if (Number.isInteger(captureTime)) {
                return JSON.stringify({
                    'angler': angler,
                    'weight': weight,
                    'species': species,
                    'location': location,
                    'bait': bait,
                    'captureTime': captureTime
                });
            }
        }

        return false;
    }

    function bindEvents() {
        $('#aside').find('button.load').on('click', readCatches);
        $('#addForm').find('button.add').on('click', createCatch);
    }

    function renderError(error) {
        console.log(error); // debug
    }
}