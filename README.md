# Zendesk-Coding-Challenge
A React based web-application, written in javascript and using node.js in runtime. The application fetches the ticket information from Zendesk's ticket API 
and displays the information in a ticket list. Within the list, the individual tickets can be expanded to learn more about their description, and more using an 
expansion icon located on the bottomm left of each individual ticket box. 

## Prerequisites
- NodeJS v16.6.1 or Higher
- npm v6.17.1 (if Node is being downloaded, npm is downloaded together with it through the CLI) or Yarn v1.22.5

Yarn is preferrable (due to higher possibility of multi installation of some of some of the depdendencies into nested directories with npm) but npm is also applicable. This is because the project was
managed using Yarn, not npm

## Installation (Mac/Linus/Windows)
1. Clone the repository to your local machine using the following command in your terminal (Mac/Linux) or Preferred Shell (Windows)<br/>
```git clone https://github.com/ardaakman/zendesk-coding-challenge.git```
2. Through the terminal, navigate into the 'viewer' directory and run the following commands to install the necessary dependencies <br/>
### For Yarn:
```$ yarn install```
### For npm:
```$ npm install```
3. Through the terminal, navigate to the 'backend' and run the same commands.
4. Run the following command, and both your backend node.js server and frontend react server (both in local ports) should be up and running!
```$ npm run dev```

Careful! The above command should be run in the 'backend' directory, and nowhere else! After running the command, the react server should automatically start in the browser.
If not, try connecting to 'http://localhost:3000/' in your browser, and that should take you to the up and running react server (of course, wait a bit for it to load!)


## Design Overview
The project consists of two main directories - the backend directory which contains everything regarding the backend infastructure and the viewer directory which contains
everything about the frontened infastructure. The UI is user-friendly, so interacting with the UI should not be a big issue!

The main components for the backend directory are:
- server.js: The mains server file. When ```npm run dev``` gets called, this file is first indexed and run. The API calls to the Zendesk Website are made here.
- parsingCall.js: Contains the parser ticketClass, which is used to parse the ticket information acquired from the Zendesk Website.

The main components for the viewer directory are all located in the src directory. These are:
- index.js: The file that contains the ReactDOM and the main render function call.
- App.js: The file that contains most of the App logic, and the combination of all the used components and functions.
- components: Directory containing all the custom React components used in the App to create the UI. These are Header, LineComponent, PageCounter, TicketListItem, and TicketList.
- assets: Directory containing extra assets (only contains the zendesk logo).
- groups.js: File containing helper funcitons used during the fetching and rendering process.

## Design and Architecture Decisions
Firstly, the backend and frontend directories were split in order to make the project and the dependencies more manageble. To avoid using multiple terminal windows starting
the project, the dependency 'concurently' was used (in the npm run dev command). Node.js was used for the backend services together with express to set up local server and 
cors as middleware to deal with cors limitations. For the frontend, React was used for its ease of development and the abundance of component libraries it has on the internet. 
For the React components that were customly made, Material UI was mostly used, together with css to edit some of the components.

The application uses the Basic Authentication scheme, i.e 'username' + ':' + 'password', bit - 64 encoded. To avoid further vulnerabilities, the password is randomly generated and will be changed by me right
after the evaluation process.

I found creating all new React Components quite a long process, so instead opted to using Material UI components and editing on them. While this was still quite an exhausting
approach, it lessened the amount of work I had to do to give the application a pleasent look.

While some of the components were very complex (The TicketListItem), I tried to make keep the main App.js file as simple as possible, hence allocated the custom-made components
to a directory of their own.





