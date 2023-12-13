import React from 'react'
import CardWidget from '../cart/CardWidget'
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.css'




const NavBar = () => {
  return (
   <>
   <p>Vintage Hunters</p>
     <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">contacto</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Antiguedades</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Joyas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Coleccionables
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Galpon Vintage
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/>
    </Navbar>


    </>
  )
}

export default NavBar