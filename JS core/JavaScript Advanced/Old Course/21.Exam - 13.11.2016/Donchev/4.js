function cardDeckBuilder(selector) {
    const SUITS = {
        C: '\u2663',
        D: '\u2666',
        H: '\u2665',
        S: '\u2660'
    };

    let main = $(selector);
    let cards = [];
    function addCard(face, suit) {
        let card = $('<div>')
            .addClass('card')
            .html(`${face} ${SUITS[suit]}`)
            .on('click', reverseAll);

        cards.push(card);
        main.append(card);
    }

    function reverseAll() {
        cards.reverse();
        rePrint();
    }

    function rePrint() {
        main.empty();
        for (let card of cards) {
            main.append($(card).on('click', reverseAll));
        }
    }

    return {
        addCard,
    }
}