import React from 'react';
import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom'

const ItemCount = ({product, cantidad, onConfirm}) => {
    

    const [stock, setstock]= useState(cantidad);
    const [contador, setContador]= useState(0);
    const [compra, setCompra]= useState(0);
    const [carrito, setCarrito]= useState(0);
    const [change, setChange]= useState(true)
    
    const navigate = useNavigate()
        
    
        const sumarCarrito = () => {
            
            if ((stock >= 1)){
                setstock(stock - 1)
                setContador(contador+1)
                setCompra(compra + Math.floor(product.price))
            }
        }

        const restarCarrito = () => {
            if (contador>0){
                setstock(stock + 1)
                setContador(contador-1)
                setCompra(compra - Math.floor(product.price))
            }
        }

        const finalizaCompra = () => {
            navigate('/cart')
        }

        const agregarCarrito = () => {
            
            setCarrito(contador)
            if (change === false){
                setChange(true)
            }else{
                setChange(false)
            }
        }
    

    return (
        <div className='contenedorCard'>
            <h3>{product.title}</h3>
            <div className='cardContador'>
                <button onClick={sumarCarrito}>+</button>
                <p>{contador}</p>
                <button onClick={restarCarrito}>-</button>
            </div>
            <p>Stock disponible: {stock}</p>

            {change ?
                <button className='agregarCarrito' onClick={agregarCarrito} >Agregar al carrito</button>
                :
                <div>
                    <button onClick={finalizaCompra} className='agregarCarrito' >Finalizar Compra</button>
                </div>
                
            }
            
            <p>El precio total sera de $ <span>{compra}</span></p>
        </div>

        
    )
}

export default ItemCount