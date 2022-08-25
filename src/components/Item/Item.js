import React from 'react';
import ItemCount from '../ItemCount/ItemCount';



const Item = ({guitar}) => {
    
    const {
        name,
        id,
        calification,
        images: {
            img1,
            img2,
            img3
        },
        price,
        discount,
        features: {
            feature1,
            feature2,
            feature3
        },
        stock
    } = guitar
    
    const descuento = parseFloat(discount.substring(0, discount.length-1))
    
    return (
        <div className='guitar-tarjeta' id={id}>

            <div className='guitar-img-container'>
                <img src={img1}
                    alt='guitar'
                    className='guitar-img'
                 
                    />
            </div>
            <div className='card-body'>
                <div className='card-left'>
                    <h5>{name}</h5>                    
                    <p>{feature1}</p>
                    <p>{feature2}</p>
                    <p>{feature3}</p>
                </div>
                <div className='card-right'>
                    <h3>${price}</h3>
                    <h5 className={descuento>0 ? 'descuento-red' : 'descuento-green' }>{descuento > 0 ? `- ${discount}` : discount}</h5>
                    <h6><span id='star-guitar'>⭐</span>{calification}</h6>
                </div>
            </div>
            <div className='agregar-guitars'>
                    <ItemCount  stock={stock}/>
            </div>
        </div>
    );
}

export default Item;
