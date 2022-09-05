import React from 'react';

const Item = ({guitar}) => {
    
    const {
        name,
        id,
        calification,
        images: {
            img1
        },
        price,
        discount} = guitar
    
    const descuento = parseFloat(discount.substring(0, discount.length-1))
    
    return (
        <div className='guitar-tarjeta' id={id}>
            <div className='guitar-tarjeta-descuento'>
                <h5 className={descuento>0 ? 'descuento-red' : 'descuento-green' }>{descuento > 0 ? `- ${discount} de descuento  ¡Oferta Limitada!` : 'ON SALE'}</h5>
            </div>
            <div className='guitar-img-container'>
                <img src={img1}
                    alt='guitar'
                    className='guitar-img' />
            </div>
            <div className='card-body'>
                    <h4 className='guitar-tarjeta-title'>{name}</h4>                    
                    <h5 className='guitar-tarjeta-price'>Desde: <span>${price}</span></h5>
                    <h6 className='guitar-tarjeta-price-before'>Antes: <span>${(price*1.1).toFixed(2)}</span></h6>
                    <div className='guitar-tarjeta-info-card'><span>Compra hasta 6 cuotas sin interés</span><img src='/assets/img/formaspagoLogos.png' width='200px' alt='logo-formas-pago'/></div>
                    <div className='guitar-tarjeta-stars'>
                    {calification} <ul className='guitar-tarjeta-stars-lista'>
                            <li><span id='star-guitar'>⭐</span></li>
                            <li><span id='star-guitar'>⭐</span></li>
                            <li><span id='star-guitar'>⭐</span></li>
                            <li><span id='star-guitar'>⭐</span></li>
                            <li><span id='star-guitar'>⭐</span></li>
                        </ul>
                    </div>
                    <div href='/#' className='btn-visualizar-infomacion'>
                    <button className='btn-information'>
                        DETALLE DEL PRODUCTO
                    </button>
            </div>
            </div>

        </div>
    );
}

export default Item;
