// The 'ticketParser' that parses the result of the API call into a dictionary - with (ID numbers)-1 as keys and the tickets as value
// Note that the first ticket has an ID 2, but for the ticketParser it is denoted a key id of '1'.
export class ticketParser {
    constructor() {
        this.indices = [];
        this.requests = [];
        this.pairing = {};
    }

    //Parses the entirety of the result of the API call.
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

