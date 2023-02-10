import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = (prop) => {
    return (
        <h2 className='greeting'>{prop.greeting}</h2>
    )
}

export default ItemListContainer