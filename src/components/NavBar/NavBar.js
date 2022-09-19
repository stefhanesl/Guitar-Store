import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../style/navbar.css'
import { NavLink, Link } from 'react-router-dom';
import './../style/navbar.css'
import { CartWidget } from '../CartWidget/CartWidget';

const NavBar = ({agregarValorCarrito}) => {
    return (
        <>
            <Navbar id="barra-navegacion"  variant="light">
                
                <Link  to="/" className='link-nav'>
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
                            to="/">
                            Inicio
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/category">
                            Catálogo
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/category/guitarra">
                            Guitarras
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/category/microfono">
                            Micrófonos
                        </NavLink>
                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/category/accesorios">
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
                <Link to='/cart' className='link-nav'>
                    <div id='carrito'>
                        <CartWidget agregarValorCarrito={agregarValorCarrito}/>
                    </div>
                </Link>
            </Navbar>
        </>
    );
}

export default NavBar;
