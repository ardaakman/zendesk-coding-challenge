import fetch from 'node-fetch';
import express from 'express';
import base64 from 'base-64';
import { Headers } from 'node-fetch';
import cors from 'cors';
import { ticketParser, errorHandle } from './parsingCalls.js';


// Create an express server, with cors on.
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

//Listening to server, and setting up the necessary variables to make an API request (The API Token, the url etc.)
app.listen(port, () => console.log(`Listening on port ${port}`));
let url = 'https://zccardaakman.zendesk.com/api/v2/requests.json'
let email = "arda.akman@berkeley.edu"
let pass = "qcsu3phgKU*ltmR"
let headers = new Headers();

//A ticket parser instance. This will be used to parse the return of the API call into something more managable.
let parser = new ticketParser();


headers.set('Authorization', 'Basic ' + base64.encode(email + ":" + pass)); 

//This will be in the end the return of the API call.
let value = "";


//Fetch call. Note that given an error, (res.ok), there is a seperate 'errorHandle' function which finds which error occurs.
function fetchData(headers) {
    let val = ""
    fetch('https://zccardaakman.zendesk.com/api/v2/requests.json', {method: 'GET', headers : headers})
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            errorHandle(res);
            throw new Error();
        }
    }).then(str => value = parser.parseAll(str))
    .then(console.log("Ticket Data Received"))
    .then(res => {
        return val;
    })
    .catch(error => 
    console.log("Error Catched!"));
}

value = fetchData(hedaers);
//Posting the result of the API Call and parsing to the backend server.
app.get('/backend', (req, res) => {
  res.send({tickets : value});
}); 


/*Function that deals with errors. Depending on the type of the error, value is set to a specific value, which is then posted
on the backend server, to be fetched by the React */
function errorHandle(response) {
    if (!response.ok) {
      console.log("API Request Issue..")
      let errorText = response.statusText
      if (errorText === "Unauthorized") {
        value = "Error: " + errorText + " ,could not authenticate you, please double check your authentication"
      } else if (errorText === "Forbidden") {
        value = "Error: " + errorText + ": ,you were blocked from accesing the Zendesk API. Please create a ticket or contact relevant support." 
      } else {
        value = "Error: " + errorText + " an error occured while authenticating you. Please try again later."
      }
  }
  return
}
