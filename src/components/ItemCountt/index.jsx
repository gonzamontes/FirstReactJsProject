import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = () => {
    
    const [stock, setstock]= useState(10);
    const [carrito, setCarrito]= useState(0);

    
    
        const sumarCarrito = () => {
            
            if ((stock >= 1)){
                setstock(stock - 1)
                setCarrito(carrito+1)
            }
        }

        const restarCarrito = () => {
            if (carrito>0){
                setstock(stock + 1)
                setCarrito(carrito-1)
            }
        }
    
        const agregarCarrito = () => {
            setCarrito(0)
        }
    

    return (
        <div className='contenedorCard'>
            <h3>Comprar Remera</h3>
            <div className='cardContador'>
                <button onClick={sumarCarrito}>+</button>
                <p>{carrito}</p>
                <button onClick={restarCarrito}>-</button>
            </div>
            <p>Stock disponible: {stock}</p>
        </div>

        
    )
}

export default ItemCount