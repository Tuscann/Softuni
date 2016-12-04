function attachEvents() {
    const user = {
        username: "guest",
        password: "pass"
    };
    let hostInfo =
    {
        appId: "kid_BJ_Ke8hZg",
        bases: {
            custom: "custom",
            venues: "venues"
        },
        headers: {
            Authorization: "Basic " + btoa(user.username + ":" + user.password),
            "content-type": "application/json"
        }

    };
    hostInfo.venues = `https://baas.kinvey.com/appdata/${hostInfo.appId}/${hostInfo.bases.venues}`;
    hostInfo.custom = `https://baas.kinvey.com/rpc/${hostInfo.appId}/${hostInfo.bases.custom}`;
    $('#getVenues').click(getVenuesByDate);

    function getVenuesByDate() {
        $.post({
            url: hostInfo.custom + "/calendar?query=" + $('#venueDate').val(),
            headers: hostInfo.headers
        })
            .then(loadVenues)
            .catch(displayError)
    }

    function loadVenues(venues) {
        let requests = [];
        for (let id of venues) {
            let request = $.get({
                url: hostInfo.venues + `/${id}`,
                headers: hostInfo.headers
            })
                .catch(displayError);
            requests.push(request);
        }

        Promise.all(requests)
            .then(displayVenues)
            .catch(displayError);
    }

    function displayVenues(venues) {
        $('#venue-info .venue').remove();
        for (let venue of venues) {
            templateVenue(venue).appendTo($('#venue-info'));
        }
    }

    function displayError(error) {
        let x = $('#venue-info').empty();
        $("#venue-info").text(error.status + ":" + error.statusText);


    }

    function confirmPurchaseView(id) {
        let html = templateConfirm(id);
        $('#venue-info').empty();
        $(html).appendTo('#venue-info');
    }

    function transactionCompleteView(id, quantity) {
        $.post({
            url: hostInfo.custom + `/purchase?venue=${id}&qty=${quantity}`,
            headers: hostInfo.headers
        })
            .then(response => $("#venue-info").html(response.html))
            .catch(displayError);
    }

    function templateVenue(venue) {
        let btnMore =
            $(`<span class="venue-name">
                    <input class="info" type="button" value="More info">
                    ${venue.name}
                </span>`).click(function () {
                $(this).siblings('div .venue-details').toggle();
            });

        let btnPurchase =
            $(`<td>
                    <input class="purchase" type="button" value="Purchase">
                </td>`).click(function () {
                confirmPurchaseView(venue._id);
            });

        let html = $(`<div class="venue" id="${venue._id}">
                        <div class="venue-details" style="display: none;">
                          <table>
                            <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
                            <tr>
                              <td class="venue-price">${venue.price} lv</td>
                              <td><select class="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>                                
                              </select></td>
                            </tr>
                          </table>
                          <span class="head">Venue description:</span>
                          <p class="description">${venue.description}</p>
                          <p class="description">Starting time: ${venue.startingHour}</p>
                        </div>
                    </div>`)
            .prepend(btnMore);

        $(html).find('.venue-price').parent()
            .append(btnPurchase);

        return html;

    }

    function templateConfirm(id) {
        let name = $(`#${id} .venue-name`).text().trim();
        let price = Number.parseFloat(
            $(`#${id} .venue-price`)
                .text().replace(/[a-zA-Z]/g, '')
        );

        let quantity = Number.parseFloat(
            $(`#${id} .quantity`).find(":selected").val()
        );


        let html = $(`<span class="head">Confirm purchase</span>
                        <div class="purchase-info">
                          <span>${name}</span>
                          <span>${quantity} x ${price.toFixed(2)}</span>
                          <span>Total: ${(quantity * price).toFixed(2)} lv</span>
                          <input type="button" value="Confirm">
                        </div>`);

        $(html).find(`input[type="button"]`)
            .click(() => transactionCompleteView(id, quantity));

        return html;
    }
}