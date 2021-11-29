//Helper functions I used for the frontend process

//After the fetch, gets the current amount of tickets avaliable and puts them into groups of 25 (for page through view)
export function ticketGroup(tickets){
    let group = []
    let current= []
    if (typeof(tickets.tickets) =="string") {
        throw new Error()
    }
    let keys = Object.keys(tickets.tickets);
    keys.forEach(element => {
        if (current.length < 25){
            current.push(element)
        } else{
            group.push(current);
            current = []
            current.push(element)
        }
    })
    group.push(current)
    return group
  }

// Not used - Used to use this function, but ended up not useful. Given a string, returns the first 12 words in the string.
export function firstTw(str){
    let i = 0
    let word_count = 0
    while(i < str.length && word_count < 12){
        if (str.charAt(i) === " "){
            word_count = word_count + 1
        }
        i = i + 1
    }
    return str.substring(0, i) + "..."
}

// Parses the date in the fetched tickets into a human readable date.
export function dateParser(str){
    var dateNew = new Date(str);
    return dateNew.toDateString();
}


// checks if the value in the fields of the ticket is avaliable (not null), and returns '{value_name} not avaliable' if it is not
export function isAvaliable(pre, str) {
    if (str != null) {
        return str
    } else {
        return pre + " is not avaliable"
    }
}