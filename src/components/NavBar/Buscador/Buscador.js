import React,{useContext} from 'react'
import {ImSearch} from 'react-icons/im'
import './buscador.css'
import { BuscadoresContext } from '../../../context/BuscadoresContext/BuscadoresContext';


export default function Buscador() {
  const { BuscarNombreProducto } = useContext(BuscadoresContext);

  const handleChange = (e) => {
      BuscarNombreProducto(e.target.value)
  }

  return (
        <div className="search">
            <input 
              className="search-txt" 
              type="text" 
              name="search" 
              placeholder="Buscar..." 
              onChange={handleChange}
              />
            <div className="search-btn" href="/">
                <ImSearch color='#04D4C1' size='25px'/>
            </div>
        </div>
  )
}
