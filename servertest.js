import fetch from 'node-fetch';
import express from 'express';
import base64 from 'base-64';
import { Headers } from 'node-fetch';
import cors from 'cors';
import { ticketParser } from './parsingCalls.js';
import {fetchData} from './server.js'


const app = express();
app.use(cors());
//Important, the default react PORT is 3000, so try to avoid this default PORT when possible (though it won't make a difference here)
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
let url = 'https://zccardaakman.zendesk.com/api/v2/requests.json'
let parser = new ticketParser();

//Testing the error case when the token provided is wrong.

function testWrongApiKey() {
    let value = ""
    var testEmail = "flabergasted@gmail.com"
    var testPass = "1411415151"
    var testHeaders = new Headers();
    testHeaders.set('Authorization', 'Basic ' + base64.encode(testEmail + ":" + testPass)); 
    value = fetchData(testHeaders)
    test('adds 1 + 2 to equal 3', () => {
    expect(value).toBe("Error: Unauthorized ,could not authenticate you, please double check your authentication");
    }); 
  


}