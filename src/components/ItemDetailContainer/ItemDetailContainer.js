import ItemDetail from '../ItemDetail/ItemDetail';
import {guitarras} from './../Datos/datos'
import { getItem } from '../CustomHooks/useFetch';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {

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

    return (
        <div>    
        {
            loading 
            ? <h2>Cargando...</h2> 
            : <ItemDetail guitarra={products}/>
        }
        </div>
    );
}

export default ItemDetailContainer;
