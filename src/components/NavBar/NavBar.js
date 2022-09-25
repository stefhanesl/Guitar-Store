import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style/navbar.css'
import { NavLink }  from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import {BsPersonFill} from 'react-icons/bs'
import Buscador from './Buscador/Buscador';
import { BuscadoresContext } from '../../context/BuscadoresContext/BuscadoresContext';


const NavBar = ({agregarValorCarrito}) => {

    const { buscarMarcaProducto, buscarPrecioProducto } = useContext(BuscadoresContext)

    const [objetoPrecios, setObjetoPrecios] = useState({
        precioMin: '',
        precioMax: ''
    });

    const handleChange = (e) => {
        buscarMarcaProducto(e.target.value)
    }

    //El problema que genera es que cuando doy a actualizar el catalogo el filtro se mantiene y no se quita
    const preciosChange = (e) => {
        setObjetoPrecios({...objetoPrecios, [e.target.name]: e.target.value})                    
    }
    const onSubmit = (e) => {
        e.preventDefault()
        buscarPrecioProducto(objetoPrecios)
        setObjetoPrecios({precioMin: '', precioMax: ''})
        e.target.reset()
    }

    const onClickCatalogo = () => {
        buscarPrecioProducto({precioMin: '', precioMax: ''})
    }


    return (
    <nav id="barra-navegacion">
        <div className="nav-bar">
            <NavLink  to="/" >
                <img
                        alt=""
                        src='/assets/img/logo-guitar.png'
                        id="logo"
                        className="d-inline-block align-top"
                    />
            </NavLink>
        </div>
        <div className='nav-bar barra-top'>

            <ul>                
                <li className='nav-tema'>
                    <NavLink
                        className={({isActive}) => isActive ? "claseActive": "claseInactive"}
                        to="/category"
                        onClick={onClickCatalogo}
                        >
                        Catálogo
                    </NavLink>
                </li>
                <li className='nav-tema'>
                    <NavLink
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/nosotros">
                        Nosotros
                    </NavLink>   
                </li>
                <li className='nav-tema'>
                    <NavLink
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/contacto">
                        Contacto
                    </NavLink>  
                </li>
                <li className='nav-icono'>
                    <ul>
                        <li>
                            <div className='div-nav'>
                                <div id='buscador-inicio'>
                                    <Buscador />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='iniciar-sesion' className='div-nav'>
                                <NavLink
                                    className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                                    to="/iniciar-sesion">
                                        <BsPersonFill color='#04D4C1'/>
                                        <h5>Iniciar Sesión</h5>
                                </NavLink>  
                            </div>
                        </li>
                        <li>
                            <NavLink to='/cart' className='div-nav'>
                                <div id='carrito'>
                                   <CartWidget />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className='nav-bar barra-bottom'>
            <ul>
                |<li className='nav-tema'>
                    <NavLink
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/category/guitarra">
                        Guitarras
                    </NavLink>
                </li>
                |<li className='nav-tema'>
                    <NavLink
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/category/microfono">
                        Micrófonos
                    </NavLink>
                </li>
                |<li className='nav-tema'>
                    <NavLink
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/category/accesorios">
                        Accesorios
                    </NavLink>
                </li>
                |
                <li> 
                    <ul>
                        <li>
                            <label for="marcas">Marcas</label>
                            <select name="marcas" id="marcas" onChange={handleChange}>
                                <option value=""></option>
                                <option value="yamaha">Yamaha</option>
                                <option value="rode">Rode</option>
                                <option value="odyssey">Odyssey</option>
                                <option value="rogue">Rogue</option>
                            </select>
                        </li>
                        |
                        <li>
                            <form onSubmit={onSubmit}>
                                <label for="precios">Precios</label>
                                <input type='text' onChange={preciosChange} name="precioMin" placeholder='min' id="precio-min"/>
                                <input type='text' onChange={preciosChange}  name="precioMax" placeholder='max' id="precio-max"/>
                                <button type='submit'>Ir</button>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>





    );
}

export default NavBar;
