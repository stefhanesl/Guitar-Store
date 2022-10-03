import { createContext, useState } from "react";

export const BuscadoresContext = createContext();

export const BuscadoresComponentContext = ({ children }) => {

    const [nombreBuscadoProducto, setNombreBuscadoProducto] = useState('');

    const BuscarNombreProducto = (nombreProducto) => {
        setNombreBuscadoProducto(nombreProducto)
    }


    return (
        <BuscadoresContext.Provider value={{ nombreBuscadoProducto, BuscarNombreProducto }}>
            {children}
        </BuscadoresContext.Provider>
    )
}