import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Table from 'react-bootstrap/esm/Table';

const ItemDetail = ({ guitarra }) => {
    
    const { addItem } = useContext(CartContext);

    const { name, price, calification, images, features: { feature1, feature2, feature3 }, stock } = guitarra;

    const agregarAlCarrito = (count) => {
        addItem(guitarra, count)
    }

    return (
        <div className='item-detail-container-principal'>
            <div className='item-detail-container'>
                <div className='item-detail-image'>
                    <img src={images} alt='guitarra' width='200px' />
                </div>
                <div className='item-detail-description'>
                    <h1 className='item-detail-title'>{name}</h1>
                    <div className='item-detail-explanation'>
                        <hr />
                        <div className='precios'>
                            <div className='item-detail-price'>${price}</div>
                            <div className='item-detail-price-af'>${(price * 1.1).toFixed(2)}</div>
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

                        <div className="item-detail-explanation">
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
                    <ItemCount stock={stock} agregarAlCarrito={agregarAlCarrito} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
