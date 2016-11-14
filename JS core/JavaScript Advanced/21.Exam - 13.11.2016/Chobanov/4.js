function cardDeckBuilder(selector){
    let suits = {
        C : '\u2663',
        D : '\u2666',
        H : '\u2665',
        S : '\u2660'
    };
    let faceArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    return {
        addCard: function (face, suit) {
            let card = $('<div class="card">').text(`${face} ${suits[suit]}`).on('click', function () {
                $('div > div').each(function() {
                    $(this).prependTo(this.parentNode);
                });
            });
            $(selector).append(card);
        }
    }
}