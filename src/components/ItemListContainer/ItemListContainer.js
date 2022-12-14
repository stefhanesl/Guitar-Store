import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Spinner from '../spi/spinner';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { BuscadoresContext } from '../../context/BuscadoresContext/BuscadoresContext';
import './itemlistcontainer.css'

export const ItemListContainer = () => {

    const { tipoProducto } = useParams();

    const { nombreBuscadoProducto } = useContext(BuscadoresContext);

    const [guitars, setGuitars] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getProducts = async () => {

            const consulta = !tipoProducto
                                ? collection(db, "products")
                                : query(collection(db, "products"), where("categoria", "==", tipoProducto))

            const response = await getDocs(consulta);

            const docs = response.docs;

            let respuesta = docs.map(doc => { return { ...doc.data(), id: doc.id } })

            if (nombreBuscadoProducto) {
                respuesta = respuesta.filter(producto => producto.name.toLowerCase().indexOf(nombreBuscadoProducto.toLowerCase()) !== -1)
            }

            setGuitars(respuesta)

            setLoading(false)
        }

        getProducts()

    }, [tipoProducto, nombreBuscadoProducto])


    return (
        <div className='contenedor-general-productos mg-top'>
            {loading
                ? <Spinner />
                : <div className='container-guitars' id='fondo'>
                    <ItemList guitars={guitars} />
                </div>
            }
        </div>
    );
}


