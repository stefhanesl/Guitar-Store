import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { guitarras } from '../Datos/datos';
import { getItem } from '../CustomHooks/useFetch';
import { useParams } from "react-router-dom";
import CarrouselImage from '../CarrouselImage/CarrouselImage';

export const ItemListContainer = () => {
    const {tipoProducto} = useParams();

    const [guitars, setGuitars] = useState([]);

    useEffect(() => {
        getItem(guitarras).then( respuesta => {
                if(!tipoProducto){
                    setGuitars(respuesta)
                }else{
                    const nuevasGuitarras = respuesta.filter( nuevaGuitarra => nuevaGuitarra.categoria === tipoProducto )
                    setGuitars(nuevasGuitarras)
                }
            })
    }, [tipoProducto]);

    return (
        <>
            <CarrouselImage />
            <div className='container-guitars' id='fondo'>
                <ItemList guitars={guitars}/>
            </div>
        </>
    );
}


