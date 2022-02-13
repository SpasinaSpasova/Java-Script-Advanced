function solve(array, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    array.forEach(element => {
        let [destination, price, status] = element.split('|');
        result.push(new Ticket(destination, Number(price), status));
    });

    result.sort((a, b) => {
        if (sorting === 'price') {
            return a[sorting] - b[sorting];
        }
        else {
            return a[sorting].localeCompare(b[sorting]);
        }
    })

    return result;
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');