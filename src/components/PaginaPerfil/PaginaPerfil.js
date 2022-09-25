import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const PaginaPerfil = () => {

   const [perfiles, setPerfiles] = useState(['descargar base']);   
  
   return (
    <div className='contenedor-perfil'>
      <img className='portada-perfil' alt='portada'/>
      <div className='subcontenedor'>
        <div className='informacion-perfil'>
            <div className='datos-persona'></div>
            <div className='botones-persona'>
                <div>
                    {
                        perfiles.map( perfil => {
                            <Link to='/iniciar-sesion/perfil'>
                                <button className='compra-persona'>Lista de Compras</button>
                            </Link>
                        })
                    }
                </div>
                <div>
                    {
                        perfiles.map( perfil => {
                            <Link to='/iniciar-sesion/perfil/pagos'>
                                <button className='formas-pagos'>Pagar</button>
                            </Link>
                        })
                    }
                
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaginaPerfil
