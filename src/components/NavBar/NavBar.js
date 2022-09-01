import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgShoppingCart } from 'react-icons/cg';
import './../style/navbar.css'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar id="barra-navegacion"  variant="light">
                
                <Link to="/">
                        <img
                                alt=""
                                src='assets/img/logo-guitar.png'
                                id="logo"
                                width="70"
                                className="d-inline-block align-top"
                                style={{borderRadius:"100%"}}
                            />

                </Link>
                <Container>

                    <Nav className="float-right" id="barra">
                    <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/productos">
                            Inicio
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/productos/guitarra">
                            Guitarras
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/productos/microfono">
                            Microfonos
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/productos/accesorios">
                            Accesorios
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/nosotros">
                            Nosotros
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/contacto">
                            Contacto
                        </NavLink>
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
