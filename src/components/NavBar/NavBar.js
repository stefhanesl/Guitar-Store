import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgShoppingCart } from 'react-icons/cg';
import './../style/navbar.css'

const NavBar = () => {
    return (
        <>
            <Navbar id="barra-navegacion"  variant="light">
                <Navbar.Brand href="#home">
                    <img
                            alt=""
                            src='assets/img/logo-guitar.png'
                            id="logo"
                            width="70"
                            className="d-inline-block align-top"
                            style={{borderRadius:"100%"}}
                        />
                </Navbar.Brand>
                <Container>

                    <Nav className="float-right" id="barra">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#guitarras">Guitarras</Nav.Link>
                        <Nav.Link href="#sobrenosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    
                </Container>
                <div id='carrito'>
                    <span id='cantidad-carrito'>10</span>
                    <CgShoppingCart id='car'/>
                </div>
            </Navbar>
        </>
    );
}

export default NavBar;
