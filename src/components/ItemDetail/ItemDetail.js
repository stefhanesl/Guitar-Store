import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Table from 'react-bootstrap/esm/Table';
import { db } from '../../utils/firebase';
import { writeBatch } from 'firebase/firestore'


const ItemDetail = ({guitarra}) => {
    const {addItem, listaProductosCarrito} = useContext(CartContext);
    
    const {name, price, calification, images, features:{feature1, feature2, feature3}, stock} = guitarra;



    const agregarAlCarrito = (count) => {
        addItem(guitarra, count)
    }

    // const updateStock = ()=>{

    //     listaProductosCarrito.forEach( producto => {

    //         const {calification, cantidad, categoria, discount, features, id, images,  name, price, stock} = producto
    //         setActualizarStock(stock - cantidad)
    //         const batch = writeBatch(db)

    //         batch.update(id, {
    //             calification: calification,
    //             categoria: categoria,
    //             discount: discount,
    //             features: features,
    //             id: id,
    //             images: images,
    //             name: name,
    //             price: price,
    //             stock: stock - cantidad,
    //         })

    //         batch.commit()
    //     });
    //   }

    return (
        <div className='item-detail-container-principal'>
            <div className='item-detail-container'>
                <div className='item-detail-image'>
                    <img src={images} alt='guitarra' width='200px'/>
                </div>
                <div className='item-detail-description'>
                    <h1 className='item-detail-title'>{name}</h1>
                    <div className='item-detail-explanation'>
                    <hr />
                        <div className='precios'>
                            <div className='item-detail-price'>${price}</div> 
                            <div className='item-detail-price-af'>${(price*1.1).toFixed(2)}</div>
                        </div>
                            <hr />
                            <h6>Descripción</h6>
                            <Table striped bordered hover variant="dark" className='tabla-cart'>
                                <thead>
                                    <tr>
                                        <td>{feature1}</td>
                                    </tr>
                                    <tr>
                                        <td>{feature2}</td>
                                    </tr>
                                    <tr>
                                        <td>{feature3}</td>
                                    </tr>
                                </thead>
                            </Table>
                          
                    </div>
            
                    <div className='item-detail-box'>
                        <div className='item-detail-starts'>
                            <ul>
                                <li>⭐ {calification}</li>
                            </ul>
                        </div>
                        <div className='item-detail-heart'>
                            <ul>
                                <li><span className='like'>🤍</span> Favorito</li>
                            </ul>
                        </div>
                        <div class="item-detail-explanation">
                            <Table striped bordered hover variant="dark" className='tabla-cart'>
                                <thead>
                                    <tr>
                                        <td>STOCK</td>
                                        <td>{stock}</td>
                                    </tr>
                                </thead>
                            </Table>
                        </div>
                    </div>

                    <ItemCount  stock={stock} agregarAlCarrito={agregarAlCarrito}/>
                </div>
            </div>

        </div>
    );
}

export default ItemDetail;
