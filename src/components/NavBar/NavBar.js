import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { FaMoneyCheckAlt } from 'react-icons/fa'
import Buscador from './Buscador/Buscador';

const NavBar = () => {

    return (
        <nav id="barra-navegacion">
            <div className="nav-bar">
                <NavLink to="/" >
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
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category"
                        >
                            Catálogo
                        </NavLink>
                    </li>
                    <li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/nosotros">
                            Nosotros
                        </NavLink>
                    </li>
                    <li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/contacto">
                            FAQ
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
                                        className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                        to="/registrarse">
                                        <FaMoneyCheckAlt color='#04D4C1' size='40px' />
                                        <h5>FACTURAR</h5>
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
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/guitarra">
                            Guitarras
                        </NavLink>
                    </li>
                    |<li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/microfono">
                            Micrófonos
                        </NavLink>
                    </li>
                    |<li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/baterias">
                            Baterías
                        </NavLink>
                    </li>
                    |<li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/banjo">
                            Banyo
                        </NavLink>
                    </li>
                    |<li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/armonica">
                            Armónica
                        </NavLink>
                    </li>
                    |<li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/amplificadores">
                            Amplificadores
                        </NavLink>
                    </li>
                    |<li className='nav-tema'>
                        <NavLink
                            className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/category/accesorios">
                            Accesorios
                        </NavLink>
                    </li>
                    |
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
