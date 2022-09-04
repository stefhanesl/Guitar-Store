import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const PiePagina = () => {
  return (
    <div id='pie-pagina'>
        <div className='pie-pagina-listado'>
            <h4>Categorías</h4>
            <ul>
                <li>Guitarras</li>
                <li>Microfonos</li>
                <li>Accesorios</li>
            </ul>
        </div>
        <div className='pie-pagina-listado'>
            <h4>Información</h4>
            <ul>
                <li>Nosotros</li>
                <li>Contacto</li>
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
    </div>
  )
}

export default PiePagina;
