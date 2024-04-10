import React from 'react'
import Nav from 'react-bootstrap/Nav';
export default function MyNavBar() {
  return (
    
    <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/text">Organisation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
  );
}
