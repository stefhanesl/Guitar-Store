import { createContext, useState } from "react";

export const BuscadoresContext = createContext();

export const BuscadoresComponentContext = ({children}) => {

    const [nombreBuscadoProducto, setNombreBuscadoProducto] = useState('');
    const [marcaBuscadoProducto, setMarcaBuscadoProducto] = useState('');
    const [precioBuscadoProducto, setPrecioBuscadoProducto] = useState({});


    const BuscarNombreProducto = (nombreProducto) => {
        setNombreBuscadoProducto(nombreProducto)
    }
    
    const buscarMarcaProducto = (marcaProducto) => {
        
        setMarcaBuscadoProducto(marcaProducto)
    }
    const buscarPrecioProducto = (precioProducto) => {
        setPrecioBuscadoProducto(precioProducto)
    }

    return(
        <BuscadoresContext.Provider value={{nombreBuscadoProducto, marcaBuscadoProducto, BuscarNombreProducto, buscarMarcaProducto, buscarPrecioProducto, precioBuscadoProducto}}>
            {children}
        </BuscadoresContext.Provider>
    )
}