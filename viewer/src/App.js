import logo from './logo.svg';
import './App.css';
import {useState,  useEffect } from 'react'
import Header from './components/header.js'
import TicketList from './components/ticketLister.js'
import { ticketGroup } from './groups';
import TicketListItem, {ticketBox} from './components/ticketBox'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
 


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
  } else if (error === true) {
    return (<h1>There has been an error with the API call ({errorMes}). Please try again later.</h1>)
  } else if (data.tickets === null) {
    return (<h1> Error: {data}, please check your API access, API token, and potential restrictions to the Zendesk API </h1>)
  } else {
    return (
    <div className="App">
      <Header title ={"Zendesk Ticket Viewer"} className= "header"/>
      <TicketList group = {groupedTickets[currentGroup]} ticket = {data} className ="ticket_list"/>
      <AwesomeButton onPress = {() => upPage()} className = "forward_button" type="primary"> Next Page </AwesomeButton>
      <AwesomeButton onPress = {() => downPage()} className = "backward_button" type="primary"> Previous Page</AwesomeButton>

    </div>
  );
}

  }

  


export default App;
