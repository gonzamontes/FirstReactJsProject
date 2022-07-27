import React from 'react'
import './style.css';
import { useNavigate } from "react-router-dom";

const ItemEnCarrito = ({ product }) => {

  const navigate = useNavigate();
  
  const handleDetail = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='tarjetaProducto' onClick={handleDetail}>
        <div className='headProducto'>
          {(product.stock === 0) ?
            <h3>{product.title}</h3>  
            :
            <h3 className='OutOfStock'>{product.title}</h3>
            }

            <img src={product.image} alt={product.title} />
        </div>
        <div className='informacionProducto'>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
        </div>
    </div>
    
  )
}

export default ItemEnCarrito