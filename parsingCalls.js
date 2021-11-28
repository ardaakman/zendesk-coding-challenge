export class ticketParser {
    constructor() {
        this.indices = [];
        this.requests = [];
        this.pairing = {};
    }

    parseAll(ticketData) {
        let requests = ticketData.requests;
        let index = 2
        requests.forEach(element => {
            this.pairing[index] = element;
            index = index + 1;
        });
        console.log(Object.keys(this.pairing))
        return this.pairing;
    }
} 

