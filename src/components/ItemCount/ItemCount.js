import React from 'react';
import { useState } from 'react';
import './../style/itemCount.css'
import producto from './../img/guitare.webp'

const ItemCount = ({stock, agregarAlCarrito}) => {

    const [cantidad, setCantidad] = useState(0);

    const aumentar = () => {
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    const decrementar = () => {
        if(cantidad>0){
            setCantidad(cantidad-1)
        }    
    }


    return (
        <>
            <div id='pantalla'>
                <button className='contar' onClick={() => decrementar()}>-</button>
                <div className='contar' id='cantidad'>{cantidad}</div>
                <button 
                    className='contar' 
                    onClick={() => aumentar()}
                    
                    >+</button>
            </div>
            <div className='tarjeta-inferior'>
                        <button id='agregar'
                        onClick={() => agregarAlCarrito(cantidad)}
                        disabled={cantidad < 1 ? true : false}
                        >Agregar</button>
                    </div>
        
        
        </>
    );
}

export default ItemCount;
