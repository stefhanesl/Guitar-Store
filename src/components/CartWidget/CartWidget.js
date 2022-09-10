import React from 'react';
import { IconContext } from 'react-icons'; 
import { MdShoppingCart } from 'react-icons/md';
import './../style/navbar.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';

export const CartWidget = ({agregarValorCarrito}) => {
    const { total } = useContext(CartContext);
    return (
        <IconContext.Provider value={{ color: "white", size:"1.6rem"}} >
            {
                total > 0  
                    ?  <>
                            <span id='cantidad-carrito'>{total}</span>
                            <MdShoppingCart  id='car'/>
                        </>
                    : null
            }
        </IconContext.Provider>
    );
}
