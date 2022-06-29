import React from 'react'
import './style.css';

const Item = ({product}) => {
  return (
    
    <div className='tarjetaProducto'>
        <div className='headProducto'>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
        </div>
        <div className='informacionProducto'>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
        </div>
    </div>
    
  )
}

export default Item