import React from 'react';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = ({guitarras}) => {
    return (
        <>
            <div className='container-guitars' id='fondo'>
                <ItemList />
            </div>
        </>
    );
}


