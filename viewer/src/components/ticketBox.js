import React from 'react'
import './ticketBox.css'
import {firstTw} from '../groups.js'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/*
      <Container maxwidth = "sm">
        <Box className = "ticket_box" sx={{
        width: 600,
        height: 40,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.7],
        },}}>
          
          <p className = "ticket_box_text"> {firstFive(props.name)}</p>
        </Box>
      </Container>


*/
function TicketListItem(props){
  console.warn(props.id)
    return (
  <div className = "ticket_wrapper">
    <Card className = "ticket_box" variant = "outlined" width = "30vw">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ticket: {props.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firstTw(props.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>


    )
}

export default TicketListItem
