export function ticketGroup(tickets){
    let group = []
    let current= []
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