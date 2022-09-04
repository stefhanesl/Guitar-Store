import React from 'react';
import { IconContext } from 'react-icons'; 
import { MdShoppingCart } from 'react-icons/md';
import './../style/navbar.css'

export const CartWidget = ({agregarValorCarrito}) => {
    return (
        <IconContext.Provider value={{ color: "white", size:"1.6rem"}} >
            <span id='cantidad-carrito'>{agregarValorCarrito}</span>
            <MdShoppingCart  style={{width:'50px'}} id='car'/>
        </IconContext.Provider>
    );
}
