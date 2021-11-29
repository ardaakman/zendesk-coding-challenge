import React from 'react'
import logo from '../assets/zendesk_logo.svg'
import './ticketBox.css'


//Basic header component, with an image attached to it. Image is imported from the assests folder.
function Header(props){
    return (
    <header className="header">
    <img src={logo} className="header_logo" alt="logo" width = "200" height = "200"/>
      <h3 className="header_title">{props.title}</h3>
    </header>
    );
}
  
export default Header;