import React, { useState, useEffect } from 'react';
import {guitarras} from './../Datos/datos'
import { getItem } from '../CustomHooks/useFetch';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({detalleGuitar}) => {

    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getItem(guitarras)
        .then( respuesta => {
            setProducts(respuesta.find(producto => producto.id === '1275425410278'))
            setLoading(false)
        }, [])
        .catch( error => `No se pueden acceder al producto: ${error}`)
    }, []);

    const {name, price, discount, calification, images, features, stock} = products
    // const {img1} = images
    // const {feature1, feature2, feature3} = features
    // let numero = discount.replace('%', '') || 0
    // let descuento = parseFloat(numero)
    return (
        <>
            {
                loading ? 
                <h2>Cargando...</h2> 
                : <div className='item-detail-container'>
                    <div className='item-detail-image'>
                        <img src='./assets/img/guitar3/guitar3.jpg' alt='guitarra' width='200px'/>
                    </div>
                    <div className='item-detail-description'>
                        <div className='item-detail-discount'>
                        {/* <h5 className={descuento>0 ? 'descuento-red' : 'descuento-green' }>{descuento > 0 ? `- ${discount} de descuento  ¡Oferta Limitada!` : 'ON SALE'}</h5> */}
                        </div>
                        <h1 className='item-detail-title'>{name}</h1>
                        <div className='item-detail-explanation'>
                            <ul>
                                {/* <li>{feature1}</li>
                                <li>{feature2}</li>
                                <li>{feature3}</li> */}
                            </ul>
                        </div>
                        <h4 className='item-detail-price'>${price}</h4>
                        <div className='item-detail-box'>
                            <div className='item-detail-starts'>
                                <ul>
                                    <li>⭐ {calification}</li>
                                </ul>
                            </div>
                            <div className='item-detail-heart'>
                                <ul>
                                    <li>🤍 Favorito</li>
                                </ul>
                            </div>
                        </div>
                        <ItemCount  stock={stock}/>
                    </div>
                 </div>
            }
        </>
    );
}

export default ItemDetail;
