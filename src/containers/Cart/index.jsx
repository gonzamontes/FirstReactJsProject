import React, { useContext } from 'react';
import ItemEnCarrito from '../../components/ItemEnCarrito/index';
import { Shop } from '../../context/ShopContext';
import './style.css';

const Cart = () => {
  const { cart } = useContext(Shop)

  return (

    <div className='contenedorCarrito'>
        {cart.map(producto => {
            return <>
              <ItemEnCarrito product={producto} key={producto.id} />
            </>
        })}
    </div>

  )
}

export default Cart