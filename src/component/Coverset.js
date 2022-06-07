import React from 'react';
import { Nav } from 'react-bootstrap';
import Document from './Resume-Suraj.docx';

console.log(Document)
export const Coverset = () => {
  return (
   <div className='hero'>
     <Nav>
     <h2 className="logo">Portfo<span>lio</span></h2>
  <Nav.Item as="ul">
  <Nav.Item as="li">
    <Nav.Link to="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Education</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Employment History</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-3">Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    

    <Nav.Link href="#contact-me">Contacts</Nav.Link>
  </Nav.Item> 
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href={Document} download eventKey="link-5" className="btn" style={{ backgroundColor: '#f9004d', color: 'white', border: '2px solid transparent', borderRadius: '30px'}}>My Resume</Nav.Link>
  </Nav.Item>
  
</Nav>
   </div>
  )
}
