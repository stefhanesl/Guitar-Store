import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Spinner from '../spi/spinner';
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../utils/firebase";


export const ItemListContainer = () => {
    const {tipoProducto} = useParams();

    const [guitars, setGuitars] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        const getProducts = async() => {

            const consulta = !tipoProducto ? collection(db,"products") : query(collection(db,"products"), where("categoria", "==", tipoProducto), limit(1));

            const response = await getDocs(consulta);

            const docs = response.docs;

            const respuesta = docs.map(doc=>{return {...doc.data(), id:doc.id} })

            setGuitars(respuesta)

            setLoading(false)

        }

        getProducts()

    },[tipoProducto])

    return (
        <div className='contenedor-general-productos mg-top'>
         
            { loading 
                ?   <Spinner />
                :   <div className='container-guitars' id='fondo'>
                        <ItemList guitars={guitars}/>
                    </div>
            }
        </div>
    );
}


