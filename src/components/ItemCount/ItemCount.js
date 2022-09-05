import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, agregarAlCarrito}) => {

    const [cantidad, setCantidad] = useState(0);

    const onAdd = () => {
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    const OnLess = () => {
        if(cantidad>0){
            setCantidad(cantidad-1)
        }    
    }


    return (
        <div className='agregar-guitars'>
            <div id='pantalla'>
                <button className='contar' onClick={() => OnLess()}>-</button>
                <div className='contar' id='cantidad'>{cantidad}</div>
                <button className='contar' onClick={() => onAdd()}>+</button>
            </div>
            <div className='tarjeta-inferior'>
                        <button id='agregar'
                        onClick={() => agregarAlCarrito(cantidad)}
                        disabled={cantidad < 1 ? true : false}
                        >Agregar al carrito</button>

            </div> 
            <div className="tarjeta-inferior" to='/cart'>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <button id='terminar-compra'
                                onClick={() => agregarAlCarrito(cantidad)}
                                >Terminar Compra</button>
                </Link>
            </div>
        
        </div>
    );
}

export default ItemCount;
