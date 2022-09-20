import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spi from '../spi/spi';
import { db } from '../../utils/firebase'
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = ({agregarAlCarrito}) => {
    const { identificador } = useParams()

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async() => {
            const consulta = doc(db, "products", identificador);
            const respuesta = await getDoc(consulta);
            const objeto = {
                ...respuesta.data(),
                id: respuesta.id
            }
            console.log(objeto)
            setProduct(objeto)
            setLoading(false)
        }
        getProduct()
    }, [identificador]);

    return (
        <div>    
        {
            loading 
            ?   <Spi />
            :   <div key={parseInt(product.id)} className='guitar-card' >
                    <ItemDetail guitarra={product} agregarAlCarrito={agregarAlCarrito}/>
                </div>
             
        }
        </div>
    );
}

export default ItemDetailContainer;
