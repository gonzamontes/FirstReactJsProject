import React from 'react'

const ItemDetail = ({product}) => {

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image}/>
            <p>{product.description}</p>
            <h3>Categoria: {product.category}</h3>
            <h2>${Math.floor(product.price)}</h2>
        </div>
    )
}

export default ItemDetail