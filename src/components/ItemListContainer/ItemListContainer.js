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
        const asincronaDeDatos = async() => {
            try {
                const objetoGuitarras = await getItem(guitarras);
                if(!tipoProducto){
                    setGuitars(objetoGuitarras)
                }else{
                    const nuevosProductos = objetoGuitarras.filter(item=> item.categoria === tipoProducto);
                    // console.log('nuevaLista',nuevaLista)
                    setGuitars(nuevosProductos)
                }
            } catch (error) {
                console.log('No cargan los datos. ', error)
            }
        }
        asincronaDeDatos()
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


