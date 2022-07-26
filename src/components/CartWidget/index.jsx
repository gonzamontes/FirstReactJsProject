import React, { useContext } from 'react';
import './style.css'
import { BsCart4 } from 'react-icons/bs'
import { Shop } from '../../context/ShopContext';

const CartWidget = () => {

  const {cart} = useContext(Shop)

  return (

    <>
      <div className='contenedorDeCart'>
        <BsCart4 size={25} className="logo-carrito" />
        <p className='cantidad-en-carrito'>{cart.length}</p> 
      </div>
    </>
    
  )
}

export default CartWidget
