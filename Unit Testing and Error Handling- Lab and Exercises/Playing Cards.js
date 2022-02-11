function solve(inp1,inp2){
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
solve('10', 'H');