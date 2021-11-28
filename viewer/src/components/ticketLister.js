import React from 'react'
import PageSelector from './pages.js'
import TicketListItem from './ticketBox.js'
import './ticketBox.css'

function TicketList(props) {
  console.warn(Object.keys(props.ticket.tickets[2]))
    const items = (props.group.map(c =>  <TicketListItem key = {c+1} description = {props.ticket.tickets[c].description}
    id = {props.ticket.tickets[c].id}
    
     />))
    return (
    <div className="ticket_list" style = {{}}>
      {items}
    </div>
    )
}

export default TicketList
