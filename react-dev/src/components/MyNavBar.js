import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function MyNavBar() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/home" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/users" className="nav-link">Users</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/text" className="nav-link">Organisation</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-link">About</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
