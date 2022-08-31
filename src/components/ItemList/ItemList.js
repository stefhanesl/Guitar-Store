import React, {useState, useEffect} from 'react';
import './../style/container.css'
import Item from '../Item/Item';

const ItemList = ({guitars}) => {

    return (
        <div className='guitars-grid'>
            { guitars.length > 0 && 
                <>
                    {guitars.map((guitar, indice) => {
                        return(
                            <div key={indice} className='guitar-card'>
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
