import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = ({product}) => {
    

    const [stock, setstock]= useState(10);
    const [carrito, setCarrito]= useState(0);
    const [compra, setCompra]= useState(0);
    
        
    
        const sumarCarrito = () => {
            
            if ((stock >= 1)){
                setstock(stock - 1)
                setCarrito(carrito+1)
                setCompra(compra + Math.floor(product.price))
            }
        }

        const restarCarrito = () => {
            if (carrito>0){
                setstock(stock + 1)
                setCarrito(carrito-1)
                setCompra(compra - Math.floor(product.price))
            }
        }

        const agregarAlCarrito = () => {
            if (carrito>0){
                setCarrito(carrito-carrito)
            }
        }
    

    return (
        <div className='contenedorCard'>
            <h3>{product.title}</h3>
            <div className='cardContador'>
                <button onClick={sumarCarrito}>+</button>
                <p>{carrito}</p>
                <button onClick={restarCarrito}>-</button>
            </div>
            <p>Stock disponible: {stock}</p>
            <button onClick={agregarAlCarrito} className='agregarCarrito' >Agregar al carrito</button>
            <p>El precio total sera de $ <span>{compra}</span></p>
        </div>

        
    )
}

export default ItemCount