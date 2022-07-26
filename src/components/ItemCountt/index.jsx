import React, { useContext } from 'react';
import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopContext';

const ItemCount = ({product, cantidad}) => {
    

    const [stock, setstock]= useState(product.stock);
    const [contador, setContador]= useState(0);
    const [compra, setCompra]= useState(0);
    const [carrito, setCarrito]= useState(0);
    
    const navigate = useNavigate()

    const {addItem} = useContext(Shop)
        
    
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
        addItem(product, carrito)
        navigate('/cart')
    }

    const agregarCarrito = () => {
        setCarrito(contador)
        setstock(cantidad-contador)
        addItem(product, contador)
    }

    const seguirComprando = () => {
        navigate('/')
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

            {!carrito ?
                <button className='agregarCarrito' onClick={agregarCarrito} >Agregar al carrito</button>
                :
                <div className='botones'>
                    <button onClick={finalizaCompra} className='finalizarCompra' >Pasar a finalizar la compra</button>
                    <button onClick={seguirComprando} className='seguirComprando' >Continuar comprando!</button>
                </div>
                
            }
            
            <p>El precio total sera de $ <span>{compra}</span></p>
        </div>

        
    )
}

export default ItemCount