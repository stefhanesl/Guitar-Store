import React from 'react'
import { SiLinkedin } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import './piepagina.css'

const PiePagina = () => {

    const anio = new Date()

    return (
        <footer >
            <div id='pie-pagina'>
                <div className='pie-pagina-listado lista-productos'>
                    <h4>Categorías</h4>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/guitarra">
                                Guitarras
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/microfono">
                                Micrófonos
                            </NavLink>
                        </li>
                        <li className='nav-tema'>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/baterias">
                                Baterías
                            </NavLink>
                        </li>
                        <li className='nav-tema'>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/banjo">
                                Banyo
                            </NavLink>
                        </li>
                        <li className='nav-tema'>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/armonica">
                                Armónica
                            </NavLink>
                        </li>
                        <li className='nav-tema'>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/amplificadores">
                                Amplificadores
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/category/accesorios">
                                Accesorios
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='pie-pagina-listado'>
                    <h4>Información</h4>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/nosotros">
                                Nosotros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                                to="/faq">
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                    <h4>PAGOS</h4>
                    <img src='assets/formaspagoLogos.png' width='240px' />
                </div>
                <div className='pie-pagina-listado'>
                    <h4>CONECTA</h4>
                    <ul className='redes'>
                        <li><a href='https://www.linkedin.com/in/stefhane-salguero/' target='_blank'><SiLinkedin /></a></li>
                        <li><a href='https://github.com/stefhanesl' target='_blank'><AiFillGithub /></a></li>
                    </ul>
                </div>
            </div>
            <div className='derechos'>
                <div> © <span>{anio.getFullYear()}</span> Guitar Store Todos los derechos reservados.</div>
            </div>
        </footer>
    )
}

export default PiePagina;
