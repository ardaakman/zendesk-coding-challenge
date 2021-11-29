import React from 'react'
import './ticketBox.css'
import {firstTw} from '../groups.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {dateParser, isAvaliable} from '../groups.js'
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import {useState} from "react"
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {MdExpandMore} from "react-icons/md";
import Container from '@mui/material/Container'
import LineComponent from './lineComponent.js'

function TicketListItem(props){
  const [expanded, setExpand] = useState(false)

  const handleExpandClick = (() => {
  setExpand(!expanded)
})

const ExpandMoreInt = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other}/>;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginBottom: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
  
  return (
    <div className = "ticket_wrapper">
      <Card className = "ticket_box" variant = "outlined" width = "30vw">
          <CardContent className = "outer_card">
            <Typography gutterBottom variant="h6" component="div" className = "ticket_header">
              ID: {isAvaliable("ID", props.ticket.id)}
            </Typography>
            <Typography variant="body2" color="text.secondary" className = "ticket_outer_subject">
              Subject: {isAvaliable("Subject", props.ticket.subject)}
            </Typography>
            <Typography className = "ticket_box_date" variant = "body1" color = "text.secondary" className = "ticket_outer_date">
            {dateParser(props.ticket.updated_at)}
            </Typography>
          </CardContent>
      <CardActions disableSpacing>
        <ExpandMoreInt
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <MdExpandMore className = "more_icon"/>
        </ExpandMoreInt>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className = "inner_card">
          <Container className = "detailed_materials_container">
          <LineComponent color = "black" height = "2"/>
          <Typography className = "ticket_details_header" variant = "h5"> Subject : {props.ticket.subject}</Typography>
          <Typography variant = "h6" className = "description_header">Description:</Typography>
            <Typography paragraph>
            {isAvaliable("Description", props.ticket.description)}
            </Typography>
          <Typography paragraph>
          Date : {dateParser(props.ticket.updated_at)} <br/>
          Requester ID: {isAvaliable("Requester ID", props.ticket.requester_id)} <br/>
          Assignee ID: {isAvaliable("Assignee ID", props.ticket.assignee_id)}
          </Typography>
        <LineComponent color = "black" height = "2"/>
        </Container>
        </CardContent>
      </Collapse>
      </CardActions>
      </Card>
    </div>
  
  
      )
}

export default TicketListItem
