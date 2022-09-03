import React from 'react';
import { IconContext } from 'react-icons'; 
import { MdShoppingCart } from 'react-icons/md';
import './../style/navbar.css'

export const CartWidget = () => {
    return (
        <IconContext.Provider value={{ color: "white", size:"1.6rem"}} >
            <span id='cantidad-carrito'>10</span>
            <MdShoppingCart  id='car'/>
        </IconContext.Provider>
    );
}
