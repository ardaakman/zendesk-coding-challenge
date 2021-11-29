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
 

//Main app file that is called by the index file, and renders the components of the app.
function App() {
  /* The following states denote:
      ** data - set to the fetched data from the backend servers
      ** error - false from the beginning, becomes true if there is an error caught during the fetching phase.
        this does not include errors encountered during the API call on the backend - those are dealt with by in another way.
        So this includes potential TypeErrors during the fetching phase.
      ** loading - set to true in the beginning, becomes false if the fetch is succesfull and finished
      ** groupedTickets - denotes the grouping of the ticket keys. Each 25 ticket keys are put in one array.
      ** currentGroup - Tells the renderer which 25 keys the user is currently looking at. For 100 tickets, 
        there are 4 possible groups of ticket groups.
  */
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [groupedTickets, setGroupedTickets] = useState([]);
  const [currentGroup, setGroup] = useState(0);
  

/* This useEffect hook fetches the data from the backend established. Also converts the data to JSON, sets the data state
  to the fetched data, and sets error to true if any type error is caught during the process.
*/
    useEffect(() => {
    const fetchedData = async () => {
      try{
        console.log("Fetching")
        const res = await fetch('http://localhost:5000/backend')
        const ret = await res.json()
        setData(ret)
        setGroupedTickets(ticketGroup(ret))
        setLoading(false)
        setError(false)
      } catch(error) {
        setError(true)
      }
    }
    fetchedData();
  }, []);
  

  // Increases current group by one after input on the next page button, causing a rerender, and showing of the next group of pages.
  const upPage = (() => {
    if (currentGroup != groupedTickets.length -1 ){
      setGroup(currentGroup + 1)
    }
  })
    // Decreases current group by one after input on the previous page button, causing a rerender, and showing of the previous group of pages.
    const downPage = (() => {
    if (currentGroup != 0){
      setGroup(currentGroup - 1)
    }
  })



/* Main portion of the App that handles with 5 possible cases and returns an appropriate UI:
  **If the fetch is still underway and there is no error
  ** If there was an error during the backend API call
  ** If there was an error during the frontend fetch call
  ** If there are no tickets avaliable
  ** If evertyhing is okay, and there are tickets avaliable to be viewed.
  */
  if ((loading === true) && (error === false)) {
    return (<h1> Viewer is laoding, please wait </h1>);
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
      <div className = "counter">
        <PageCounter className = "page_counter" pageNumber = {currentGroup + 1} totalPages = {groupedTickets.length}/>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" className ="button_group">
        <Button onClick = {() => downPage()}>Previous Page</Button>
        <Button onClick = {() => upPage()}>Next Page</Button>
      </ButtonGroup>
    </div>
  );
}

  }

  


export default App;
