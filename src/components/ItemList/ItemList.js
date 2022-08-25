import React, {useState, useEffect} from 'react';
import './../style/container.css'
import { guitarras } from '../Datos/datos';
import Item from '../Item/Item';

const ItemList = () => {

    const [guitars, setGuitars] = useState([]);

    const obtenerGuitarras = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(guitarras);
            }, 3000);
            
        })
    }

    useEffect(() => {
        const asincronaDeDatos = async() => {
            try {
                const objetoGuitarras = await obtenerGuitarras();
                setGuitars(objetoGuitarras)
            } catch (error) {
                console.log('No cargan los datos.')
            }
        }
        asincronaDeDatos()
    }, []);

    return (
        <div className='guitars-grid'>
            {
                guitars.length > 0 && 
                <>
                    {guitars.map((guitar, indice) => {
                        return(
                            <div key={indice} class='guitar-card'>
                                <Item guitar={guitar}/>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default ItemList;
