import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { Shop } from '../../context/ShopContext';
import { useState } from 'react';

const ItemEnCarrito = ({product}) => {

    const navigate = useNavigate();

    const {removeItem} = useContext(Shop)
    const {addItem} = useContext(Shop)

    const [contador, setContador] = useState(0)
    const [total, setTotal] = useState(product.quantity)

    // ver si hay productos en la pagina del carrito

    const [productosEnCarrito, setProductosEnCarrito] = useState(0)

    const handleDetail = () => {
        navigate(`/detail/${product.id}`)
    }

    const sumarContador = () => {
        setContador(contador+1)
        setTotal(total+1)
    }
    
    const restarContador = () => {
        setContador(contador-1)
        setTotal(total-1)
    }

    const eliminarProducto = () => {
        setTotal(0)
        removeItem(product)
    }

    const hayProductos = () => {
        if (productosEnCarrito>0){
            return true
        } else{
            return false
        }
    }

    return (
        
        <>

            {(total>0) ?
                <div className='productoEnCarrito'>
                
                    <div className='seccionIzquierda'>
                        <div className='headProductoEnCarrito'  onClick={handleDetail}>
                            <h3>{product.title}</h3>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className='informacionProductoEnCarrito'>
                            <h2>${product.price}</h2>
                        </div>
                    </div>
                    <div className='seccionDerecha'>
                        <h3>CANTIDAD</h3>
                        <div className='cardContadorCart'>
                                <button onClick={sumarContador}>+</button>
                                <p>{total}</p>
                                <button onClick={restarContador}>-</button>
                        </div>
                    </div>
                    <div className='precioCarrito'>
                        <h3 className='precioDelProducto'>PRECIO</h3>
                        <p className='figuraPrecio'>${total*product.price}</p>
                    </div>
                    <button className='eliminarDeCarrito' onClick={eliminarProducto}> ELIMINAR PRODUCTO </button>
                

                </div>
            :
            null
            }

        </>

        

    )
}

export default ItemEnCarrito