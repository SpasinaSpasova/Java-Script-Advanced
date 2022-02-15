class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {

        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        //indexx
        let index = this.listOfParticipants.indexOf(x => x.name == name);
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'Battleship') {

            let player1 = this.listOfParticipants.findIndex(x => x.name == participant1);

                if (player1 == -1||!this.listOfParticipants.some(x => x.name == this.listOfParticipants[player1].name)) {
                    throw new Error(`Invalid entered name/s.`);
                }
                this.listOfParticipants[player1].power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;


        }
        else if (typeOfGame === 'WaterBalloonFights') {
            let player1 = this.listOfParticipants.findIndex(x => x.name == participant1);;
            let player2 = this.listOfParticipants.findIndex(x => x.name == participant2);;

        
                if (player1 == -1||!this.listOfParticipants.some(x => x.name == this.listOfParticipants[player1].name)) {
                    throw new Error(`Invalid entered name/s.`);
                }
                if (player2 == -1||!this.listOfParticipants.some(x => x.name == this.listOfParticipants[player2].name)) {
                    throw new Error(`Invalid entered name/s.`);
                }
                if (this.listOfParticipants[player1].condition !== this.listOfParticipants[player2].condition) {
                    throw new Error(`Choose players with equal condition.`);
                }

                if (this.listOfParticipants[player1].power > this.listOfParticipants[player2].power) {
                    this.listOfParticipants[player1].wins += 1;
                    return `The ${this.listOfParticipants[player1].name} is winner in the game ${typeOfGame}.`
                }

                if (this.listOfParticipants[player1].power < this.listOfParticipants[player2].power) {
                    this.listOfParticipants[player2].wins += 1;
                    return `The ${this.listOfParticipants[player2].name} is winner in the game ${typeOfGame}.`
                }
                return `There is no winner.`
            
        }
    }
    toString() {
        let result = '';
        result += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        /*On the lines, display information about each participant, 
        sorted in descending order by their wins in the following format:
          `{name} - {condition} - {power} - {wins}`*/

        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sorted.forEach(p => {
            result += `${p.name} - ${p.condition} - ${p.power} - ${p.wins}\n`;
        });

        return result.trimEnd();
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //onsole.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());
