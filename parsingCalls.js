export class ticketParser {
    constructor() {
        this.indices = [];
        this.requests = [];
        this.pairing = {};
    }

    parseAll(ticketData) {
        let requests = ticketData.requests;
        let index = 1
        requests.forEach(element => {
            this.pairing[index] = element;
            index = index + 1;
        });
        return this.pairing;
    }
} 

