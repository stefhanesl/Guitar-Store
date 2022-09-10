import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartView = ({producto, indice, removeItem}) => {
    
    const { id, name, price,  images: {img1}, cantidad } = producto



    return (
        <>
            <tr>
                <td>{indice+1}</td>
                <td><img src={img1} alt='producto' width='50px'/></td>
                <td>{name}</td>
                <td>{cantidad}</td>
                <td>{price}</td>
                <td>{price*cantidad}</td>
                <td onClick={() => removeItem(id)}><RiDeleteBin6Line size='25px'/></td>
            </tr>
        </>

    );
}

export default CartView;
