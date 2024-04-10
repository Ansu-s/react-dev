
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
export default function About() {
const [darkStyle, updateStyle] = useState({
     color: "white",
     backgroundColor: "black"
})
const [buttonText, updateButtonText] = useState("Enable Lightmode");
const toggleStyle = ()=> {
    if(darkStyle.color==="white"){
        updateStyle({
            color: "black",
            backgroundColor: "white",
            border: "1px solid white"
       })
       updateButtonText("Enable Darkmode")
    }
       else{
        updateStyle({
            color: "white",
            backgroundColor: "black"
        })
       updateButtonText("Enable Lightmode")
    }
    }

  return (
    <>
  
    <div className='container' style={darkStyle}>
    <h1 className='my-4'>About us</h1>
    <Accordion defaultActiveKey="0" style={darkStyle}>
    <Accordion.Item eventKey="0" style={darkStyle}>
      <Accordion.Header style={darkStyle}>Accordion Item #1</Accordion.Header>
      <Accordion.Body style={darkStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" style={darkStyle}>
      <Accordion.Header style={darkStyle}>Accordion Item #2</Accordion.Header>
      <Accordion.Body style={darkStyle}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>
  <div className='container my-3'>
  <Button onClick={toggleStyle} variant="info">{buttonText}</Button>{' '}
  </div>
  </>
  )
}
