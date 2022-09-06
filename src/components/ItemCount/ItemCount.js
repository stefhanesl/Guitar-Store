import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, agregarAlCarrito}) => {

    const [cantidad, setCantidad] = useState(0);
    const [loadingBtn, setLoadingBtn] = useState(false)

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
    
    const mostrarBtn = () => {
        setLoadingBtn(true)
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
                        onClick={() => mostrarBtn()}
                        // disabled={cantidad < 1 ? true : false}
                        >Agregar al carrito</button>

            </div> 
            {
                loadingBtn 
                ?  <div className="tarjeta-inferior" to='/cart'>
                        <Link to='/cart' style={{ textDecoration: 'none' }}>
                            <button id='terminar-compra'>Terminar Compra</button>
                        </Link>
                    </div>
                : null
            }
        
        </div>
    );
}

export default ItemCount;
