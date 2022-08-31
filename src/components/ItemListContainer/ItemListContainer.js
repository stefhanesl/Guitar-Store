import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { guitarras } from '../Datos/datos';
import { getItem } from '../CustomHooks/useFetch';

export const ItemListContainer = () => {

    const [guitars, setGuitars] = useState([]);

    useEffect(() => {
        const asincronaDeDatos = async() => {
            try {
                const objetoGuitarras = await getItem(guitarras);
                setGuitars(objetoGuitarras)
            } catch (error) {
                console.log('No cargan los datos. ', error)
            }
        }
        asincronaDeDatos()
    }, []);

    return (
        <>
            <div className='container-guitars' id='fondo'>
                <ItemList guitars={guitars}/>
            </div>
        </>
    );
}


