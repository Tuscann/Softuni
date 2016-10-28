let defineCards = (function () {
    "use strict";
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };
    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    class Card {
        constructor(face, suit) {
            this.suit = suit;
            this.face = face;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!Faces.includes(face))
                throw new Error("Invalid card face: " + face);
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(
                    k => Suits[k]).includes(suit))
                throw new Error("Invalid card suite: " + suit);
            this._suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }
    return {Suits, Card}
}());
let Suits = defineCards.Suits;
let Card = defineCards.Card;

let card = new Card('Q', Suits.DIAMONDS);
let card1 = new Card("1", Suits.DIAMONDS);
//
console.log('' + card);
console.log('' + card1);


