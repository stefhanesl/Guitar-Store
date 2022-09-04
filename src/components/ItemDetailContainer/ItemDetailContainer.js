import ItemDetail from '../ItemDetail/ItemDetail';
import {guitarras} from './../Datos/datos'
import { getItem } from '../CustomHooks/useFetch';
import { useState, useEffect } from 'react';
import './../style/spinner.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({agregarAlCarrito}) => {
    const { identificador } = useParams()

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem(guitarras)
        .then( respuesta => {
            const nuevaGuitarra = respuesta.find( guita => guita.id === identificador )
            setProduct(nuevaGuitarra)
            setLoading(false)
        })
        .catch( error => `No se pueden acceder al producto: ${error}`)
    }, [identificador]);

    return (
        <div>    
        {
            loading 
            ?   <div class="spinner"></div>
            :   <div key={parseInt(product.id)} className='guitar-card' >
                    <ItemDetail guitarra={product} agregarAlCarrito={agregarAlCarrito}/>
                </div>
             
        }
        </div>
    );
}

export default ItemDetailContainer;
