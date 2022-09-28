import React, {useState} from 'react';
import './../style/navbar.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import CartView from '../CartView/CartView';
import Table from 'react-bootstrap/esm/Table';
import { MdCleaningServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './cart.css'
import { GiReturnArrow } from 'react-icons/gi'
import Formulario from '../Formulario/Formulario';
import { addDoc, collection} from 'firebase/firestore'
import { db } from '../../utils/firebase';
import { FaMoneyCheckAlt } from 'react-icons/fa'

const CartPagina = () => {

    const { removeItem, clear, listaProductosCarrito, totalCompra } = useContext(CartContext);
    
    const [orderId, setOrderId] = useState("");

    const getDataForm = (e) => {
        
        const orden = {
            buyer: {
                name: e.target[0].value, 
                phone: e.target[1].value, 
                email: e.target[2].value
            },
            items: listaProductosCarrito,
            date: new Date(),
            total: totalCompra
        }
        console.log(orden)
        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, orden).then((respuesta) => {
            
            setOrderId(respuesta.id)
        })
    }
    
    
    return (
        <div className='cart-container mg-top'>
            <div className='cart-container-img'>
              
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
                    <th></th>
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
            <tr></tr>
            {
                totalCompra > 0 && 
                    <Table className='table-total' variant="dark">
                        <thead>
                            <tr>
                                <th colSpan={9}>Total a pagar:</th>
                                <th colSpan={1}>${(totalCompra).toFixed(2)}</th>
                            </tr>
                        </thead>
                    </Table>
            }
            <tr></tr>

            <div className='btn-botones-cart'>
                <div>
                    { listaProductosCarrito.length === 0 &&
                        <Link to='/category'>
                                <button className='btn-regresar-catalogo'>
                                    <GiReturnArrow  size='40px' className='btn-icono'/>
                                    Regresar a la tienda
                                </button>
                        </Link>
                    }
                </div>
                <div id='btn-facturar'>
                    <Link
                        className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/registrarse">
                        <button className='btn-regresar-catalogo'>
                        <FaMoneyCheckAlt  size='40px' className='btn-icono'/>
                        Facturar Compra
                        </button>
                    </Link> 
                </div>
                <div>
                    <button onClick={()=> clear()} className='btn-vaciar-carrito'>
                        <MdCleaningServices size='40px' className='btn-icono'/>
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CartPagina;
