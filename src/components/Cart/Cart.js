import React from 'react';
import './../style/navbar.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import CartView from '../CartView/CartView';
import Table from 'react-bootstrap/esm/Table';
import { MdCleaningServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './cart.css'
import { GiReturnArrow } from 'react-icons/gi'

const CartPagina = () => {

    const { addItem, removeItem, clear, listaProductosCarrito } = useContext(CartContext);
    
    return (
        <div className='cart-container'>
            <div className='cart-container-img'>
                <img class='img-main' />
            </div>
            <h1>LISTA DE COMPRAS</h1>

            <Table striped bordered hover variant="dark" className='tabla-cart'>
                <thead>
                    <tr>
                    <th>Nº</th>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                { listaProductosCarrito.length > 0 
                    ? <tbody>
                        {listaProductosCarrito.map( (producto, indice) => {
                            return (
                                <CartView removeItem={removeItem} producto={producto} indice={indice} key={parseInt(producto.id)}/>
                            )
                        })}
                        </tbody>
                    : <>
                        <tbody>
                            <tr>
                                <td colSpan={7}><h2>No hay productos en el carrito.</h2></td>
                            </tr>
                        </tbody>
                    </>
                }
            </Table>
            <div className='btn-botones-cart'>
                { listaProductosCarrito.length === 0 &&
                    <Link to='/'>
                            <button className='btn-regresar-catalogo'><GiReturnArrow  size='40px' className='btn-icono'/>Regresar a la tienda</button>
                    </Link>
                }
                <button onClick={()=> clear()} className='btn-vaciar-carrito'><MdCleaningServices size='40px' className='btn-icono'/>Vaciar Carrito</button>
            </div>
        </div>
    );
}
export default CartPagina;
