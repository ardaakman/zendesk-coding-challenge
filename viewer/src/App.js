import logo from './logo.svg';
import './App.css';
import {useState,  useEffect } from 'react'
import Header from './components/header.js'
import TicketList from './components/ticketLister.js'
import { ticketGroup } from './groups';
import TicketListItem, {ticketBox} from './components/ticketBox'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import PageCounter from './components/pageCounter.js'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
 


function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState([]);
  const [currentGroup, setGroup] = useState(0);
  const [errorMes, setErrorMes] = useState("")
  


    useEffect(() => {
    const fetchedData = async () => {
      try{
        console.log("Fetching")
        const res = await fetch('http://localhost:5000/backend')
        const ret = await res.json()
        console.warn(ret)
        setData(ret)
        setGroupedTickets(ticketGroup(ret))
        setLoading(false)
        setError(false)
      } catch(error) {
        setError(true)
        console.warn(data.tickets)
        setErrorMes(error.toString())
      }
    }
    fetchedData();
  }, []);
  
  const upPage = (() => {
    if (currentGroup != groupedTickets.length -1 ){
      setGroup(currentGroup + 1)
    }
  })

    const downPage = (() => {
    if (currentGroup != 0){
      setGroup(currentGroup - 1)
    }
  })


  if ((loading === true) && (error === false)) {
    return (<h1> Viewer is loding, please wait </h1>);
  } else if ((error === true) && (typeof(data.tickets) === "string")) {
    return (<h1>There has been an error with the API call ({data.tickets}). Please try again later.</h1>)
  } else if (error === true) {
    return (<h1>There has been an error with the API call. Please try again later.</h1>)
  } else if(data.tickets.length ===0){
    return (
      <div className = "App">
      <Header title ={"Zendesk Ticket Viewer"} className= "header"/>
      <h1 className = "alt_header"> No tickets avaliable. </h1>
      <PageCounter className = "page_counter" pageNumber = {currentGroup + 1} totalPages = {groupedTickets.length}/>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" className ="button_group">
        <Button onClick = {() => downPage()}>Previos Page</Button>
        <Button onClick = {() => upPage()}>Next Page</Button>
      </ButtonGroup>
      </div>
    )
  } else {
    return (
    <div className="App">
      <Header title ={"Zendesk Ticket Viewer"} className= "header"/>
      <TicketList group = {groupedTickets[currentGroup]} ticket = {data} className ="ticket_list"/>
      <PageCounter className = "page_counter" pageNumber = {currentGroup + 1} totalPages = {groupedTickets.length}/>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" className ="button_group">
        <Button onClick = {() => downPage()}>Previos Page</Button>
        <Button onClick = {() => upPage()}>Next Page</Button>
      </ButtonGroup>
    </div>
  );
}

  }

  


export default App;
