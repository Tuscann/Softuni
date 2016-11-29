function attachEvents() {
    const apiUrl = 'https://judgetests.firebaseio.com';
    const weatherContainer = $('#forecast');
    const todayWeather = $('#current');
    const upcomingWeather = $('#upcoming');

    $('#submit').on('click', getLocationCode);

    function getLocationCode() {
        let locationName = $('#location').val().trim();
        if (locationName !== '') {
            $.get({
                url: apiUrl + '/locations.json'
            })
                .then(function (data) {
                    let locationCode = data.filter(e => e.name === locationName)[0].code;
                    if (locationCode) {
                        getLocationReport(locationCode);
                    }
                })
                .catch(renderError);
        }
    }

    function getLocationReport(code) {
        let currentConditions = $.get({
            url: apiUrl + '/forecast/today/' + code + '.json'
        });

        let threeDaysConditions = $.get({
            url: apiUrl + '/forecast/upcoming/' + code + '.json'
        });

        Promise.all([currentConditions, threeDaysConditions])
            .then(processConditions)
            .catch(renderError);
    }

    function processConditions([today, threeDays]) {
        weatherContainer.show();
        renderTodayWeather(today);
        renderThreeDaysWeather(threeDays);
    }

    function renderTodayWeather(data) {
        todayWeather.find('.label').nextAll().remove();
        todayWeather
            .append($('<span>')
                .addClass('condition symbol')
                .html(getWeatherIcon(data.forecast.condition)))
            .append($('<span>')
                .addClass('condition')
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(data.name))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${data.forecast.low}&#176;/${data.forecast.high}&#176;`))
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(data.forecast.condition)));
    }

    function renderThreeDaysWeather(data) {
        upcomingWeather.find('.label').nextAll().remove();

        for (let condition of data.forecast) {
            appendWeather(upcomingWeather, condition);
        }
    }

    function appendWeather(container, stats) {
        container
            .append($('<span>')
                .addClass('upcomming')
                .append($('<span>')
                    .addClass('symbol')
                    .html(getWeatherIcon(stats.condition)))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${stats.low}&#176;/${stats.high}&#176;`))
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(stats.condition))
            );
    }

    function getWeatherIcon(condition) {
        return {
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': '&#x2614;'
        }[condition];
    }

    function renderError() {
        weatherContainer.show();
        weatherContainer.text('Error'); // or append ?
    }
}