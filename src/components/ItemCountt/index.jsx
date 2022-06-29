import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = ({agregarCarrito}) => {
    
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
    

    return (
        <div className='contenedorCard'>
            <h3>Comprar Remera</h3>
            <div className='cardContador'>
                <button onClick={sumarCarrito}>+</button>
                <p>{carrito}</p>
                <button onClick={restarCarrito}>-</button>
            </div>
            <p>Stock disponible: {stock}</p>
            <button className='agregarCarrito' onClick={agregarCarrito}>Agregar al carrito</button>
        </div>

        
    )
}

export default ItemCount