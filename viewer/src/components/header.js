import React from 'react';
import logo from '../assets/zendesk_logo.svg'
import './ticketBox.css'


function Header(props){
    return (
    <header className="header">
     <img src={logo} className="header_logo" alt="logo" width = "70" height = "70"/>
      <h3 className="header_title">{props.title}</h3>
    </header>
    );
}
  
export default Header;