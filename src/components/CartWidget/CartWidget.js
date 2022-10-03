import React from 'react';
import { IconContext } from 'react-icons';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './cartwidget.css'

export const CartWidget = () => {

    const { total } = useContext(CartContext);
    
    return (
        <IconContext.Provider value={{ color: "white", size: "1.3rem" }} >
            {
                total > 0
                    ? <div className='car-contenedor'>
                        <span id='cantidad-carrito'>{total}</span>
                        <RiShoppingCartFill size='40px' color='#04D4C1' />
                        <h5>COMPRAS</h5>
                    </div>
                    : null
            }
        </IconContext.Provider>
    );
}
