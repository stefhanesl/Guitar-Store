import React from 'react';
import './../style/navbar.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import CartView from '../CartView/CartView';
import Table from 'react-bootstrap/esm/Table';
import { MdCleaningServices } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartPagina = () => {

    const { addItem, removeItem, clear, listaProductosCarrito } = useContext(CartContext);
    
    return (
        <div className='cart-container'>
            <h1>LISTA DE COMPRAS</h1>

            <Table striped bordered hover variant="dark">
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
                    : <td colSpan={7}>
                            <h2>No hay productos en el carrito.</h2>
                            <Link to='/'>
                                <button>Regresar a la tienda.</button>
                            </Link>
                    </td>
                }
            </Table>
            <button onClick={()=> clear()} style={{background:'black'}}><MdCleaningServices size='40px'/>Vaciar Carrito</button>
        </div>
    );
}
export default CartPagina;
