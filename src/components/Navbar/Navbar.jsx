import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.scss';

function MyAppNavbar() {
  return (
    <Navbar id="Navbar" bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className="logo" src="LIMA_CLINICA_Mesa-de-trabajo-1.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Conócenos</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Especialistas</Nav.Link>
            <NavDropdown title="Novedades" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Donaciones</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyAppNavbar;