import React from 'react'
import TicketListItem from './ticketBox.js'
import './ticketBox.css'


//Component that returns a list of TicketBoxes through a mapping function.
function TicketList(props) {
    const items = (props.group.map(c =>  <TicketListItem key = {c} ticket = {props.ticket.tickets[c]}
     />))
    return (
    <div className="ticket_list" style = {{}}>
      {items}
    </div>
    )
}

export default TicketList
