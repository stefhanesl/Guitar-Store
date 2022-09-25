import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartView = ({producto, indice, removeItem}) => {
    
    const { id, name, price,  images, cantidad } = producto



    return (
        <>
            <tr>
                <td>{indice+1}</td>
                <td><img src={images} alt='producto' width='50px'/></td>
                <td>{name}</td>
                <td>{cantidad}</td>
                <td>${price}</td>
                <td>${(price*cantidad.toFixed(2))}</td>
                <td onClick={() => removeItem(id)}><RiDeleteBin6Line size='25px'/></td>
            </tr>
        </>

    );
}

export default CartView;
