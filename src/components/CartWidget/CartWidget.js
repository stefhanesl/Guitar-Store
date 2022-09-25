import React from 'react';
import { IconContext } from 'react-icons'; 
import { MdShoppingCart } from 'react-icons/md';
import './../style/navbar.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './cartwidget.css'

export const CartWidget = ({agregarValorCarrito}) => {
    const { total } = useContext(CartContext);
    return (
        <IconContext.Provider value={{ color: "white", size:"1.6rem"}} >
            {
                total > 0  
                    ?  <>
                            <span id='cantidad-carrito'>{total}</span>
                            <MdShoppingCart  id='car' size='40px' color='#04D4C1'/>
                        </>
                    : null
            }
        </IconContext.Provider>
    );
}
