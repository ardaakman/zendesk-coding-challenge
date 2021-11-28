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
  
  useEffect(() => {
    fetch('http://localhost:5000/backend').then((res) => res.json())
    .then((datum) => setData(datum),
    console.log(data))
    .catch(error =>  
      console.warn("An Error Fetching the Data has Occured", error),
      ).finally(() => {
        setError(false)
        console.warn("Fetching Data Now")
        try{
          setGroupedTickets(ticketGroup(data));
          console.warn(groupedTickets[1])
          setLoading(false);
          console.log("Here")
        } catch (error) {
          console.warn(error)
          setError(true)
        }
      })}, [error])
  
  const upPage = (() => {
    if (currentGroup != groupedTickets.length -1 ){
      console.warn("Pressed")
      console.warn(groupedTickets.length)
      setGroup(currentGroup + 1)
    }
  })

    const downPage = (() => {
    if (currentGroup != 0){
      console.warn("Pressed")
      console.warn(groupedTickets.length)
      setGroup(currentGroup - 1)
    }
  })

  if (error === true) {
    return (<h1> Some error has occured, please try again after waiting a couple minutes </h1>);
  } 
  if (loading === true) {
    return (<h1>Viewer is loading right now!</h1>)
  } else {
    console.warn(data)
    return (
    <div className="App">
      <Header title ={"Zendesk Ticket Viewer"} className= "header"/>
      <TicketList group = {groupedTickets[currentGroup]} ticket = {data} className ="ticket_list"/>
      <div>
        <AwesomeButton onPress = {() => upPage()} className = "forward_button" type="primary"> Next Page </AwesomeButton>
        <AwesomeButton onPress = {() => downPage()} className = "backward_button" type="primary"> Previous Page</AwesomeButton>
      </div>

    </div>
  );
}

  }

  


export default App;
