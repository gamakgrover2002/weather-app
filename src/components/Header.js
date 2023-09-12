import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
   
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="#">Weather App</Navbar.Brand>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header