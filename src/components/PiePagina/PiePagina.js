import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import './piepagina.css'

const PiePagina = () => {
  return (
    <footer id='pie-pagina'>
        <div className='pie-pagina-listado'>
            <h4>Categorías</h4>
            <ul>
                <li>
                    <NavLink 
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/category/guitarra">
                        Guitarras
                    </NavLink>
                </li>
                <li><NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/category/microfono">
                            Micrófonos
                        </NavLink></li>
                <li>                       <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/category/accesorios">
                            Accesorios
                        </NavLink></li>
            </ul>
        </div>
        <div className='pie-pagina-listado'>
            <h4>Información</h4>
            <ul>
                <li>                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/nosotros">
                            Nosotros
                        </NavLink></li>
                <li>                        <NavLink 
                            className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                            to="/contacto">
                            FAQ
                        </NavLink></li>
            </ul>
        </div>
        <div className='pie-pagina-listado'>
            <h4>CONECTA</h4>
            <ul className=' redes'>
                <li><FaTwitter /> </li>
                <li><BsFacebook /></li>
                <li><AiFillGithub /></li>
            </ul>
        </div>
    </footer>
  )
}

export default PiePagina;
