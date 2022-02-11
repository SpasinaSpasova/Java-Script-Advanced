function printDeckOfCards(cards) {

    let result = [];

    try {
        cards.map(x => {
            let data = x.split('');
            let suit;
            let face;
            if (data.length == 3) {
                face = data[0] + data[1];
                suit = data[2];
            } else {
                face = data[0];
                suit = data[1];
            }
            try {
                result.push(cardGenerator(face, suit));
            } catch (error) {
                throw new Error(`Invalid card: ${x}`);
            }
        });
        console.log(result.join(' '));
    } catch (error) {
        console.log(error.message);
    }

    function cardGenerator(inp1,inp2) {
        let card = {
            faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
            suits: { S: '\u2660', H: '\u2665', D: '\u2666 ', C: '\u2663' },
            toString() {
                return `${inp1}${card.suits[inp2]}`;
            }
        }

        if (card.suits[inp2] && card.faces.includes(inp1)) {
            return card.toString();
        } else {
            throw new Error('Error');
        }
    }
}
console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));