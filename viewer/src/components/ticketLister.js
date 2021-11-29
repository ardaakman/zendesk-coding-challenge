import React from 'react'
import PageSelector from './pages.js'
import TicketListItem from './ticketBox.js'
import './ticketBox.css'

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
