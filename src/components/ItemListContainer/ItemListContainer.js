import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { guitarras } from '../Datos/datos';
import { getProducts } from '../CustomHooks/useFetch';
import { useParams } from "react-router-dom";
import CarrouselImage from '../CarrouselImage/CarrouselImage';

export const ItemListContainer = () => {
    const {tipoProducto} = useParams();

    const [guitars, setGuitars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts(guitarras).then( respuesta => {
                if(!tipoProducto){
                    setGuitars(respuesta)
                    setLoading(false)
                }else{
                    const nuevasGuitarras = respuesta.filter( nuevaGuitarra => nuevaGuitarra.categoria === tipoProducto )
                    setGuitars(nuevasGuitarras)
                    setLoading(false)
                }
            })
    }, [tipoProducto]);

    return (
        <div className='contenedor-general-productos'>
            <CarrouselImage />
            { loading 
                ? <div className="spinner"></div> 
                :   <div className='container-guitars' id='fondo'>
                        <ItemList guitars={guitars}/>
                    </div>
            }
        </div>
    );
}


