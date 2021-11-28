import fetch from 'node-fetch';
import express from 'express';
import base64 from 'base-64';
import { Headers } from 'node-fetch';
import cors from 'cors';
import { ticketParser } from './parsingCalls.js';

const app = express(); //Line 2
app.use(cors());
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
let url = 'https://zccardaakman.zendesk.com/api/v2/requests.json'
let email = "arda.akman@berkeley.edu"
let pass = "qcsu3phgKU*ltmR"
let headers = new Headers();
let parser = new ticketParser();

headers.set('Authorization', 'Basic ' + base64.encode(email + ":" + pass)); 

let value = "";
fetch('https://zccardaakman.zendesk.com/api/v2/requests.json', {method: 'GET', headers : headers})
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Something went wrong, try again later!")
        }
    }).then(str => value = parser.parseAll(str))
    .then(console.log("Ticket Data Received"));


app.get('/backend', (req, res) => { //Line 9
  res.send({tickets : value})
}); //Line 11s
