import React, { useContext } from 'react';
import { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopContext';

const ItemCount = ({product}) => {
    
    const navigate = useNavigate(); const {addItem} = useContext(Shop);

    // contador que muestra aumento o disminucion al clickear
    const [contador, setContador] = useState(0)

    // acumula el dinero que costara variando la cantidad de producto 
    const [compra, setCompra]= useState(0);

    // contador de stock que luego se reemplaza en el stock real 
    const [stock, setStock] = useState(product.stock);
    
    // una vez terminado de sumar productos pasamos a guardarlo en el carrito
    const [carrito, setCarrito]= useState(0);
        
    
    const sumarContador = () => {
        if ((stock >= 1)){
            setContador(contador + 1)
            setStock(stock - 1);
            setCompra(compra + Math.floor(product.price));
        }
    }

    const restarContador = () => {
        if (contador>0){
            setContador(contador - 1)
            setStock(stock + 1);
            setCompra(compra - Math.floor(product.price));
        }
    }

    const agregarCarrito = () => {
        
        if (contador>0){
            setCarrito(contador)
            addItem(product, contador);

        }else{
            alert("Debes llevar al menos un producto!")
        }
    }

    const seguirComprando = () => {
        navigate('/')
    }

    const finalizaCompra = () => {
        product.stock = stock;
        navigate('/cart')
    }
    
    return (
        <div className='contenedorCard'>
            <h3>{product.title}</h3>
            <div className='cardContador'>
                <button onClick={sumarContador}>+</button>
                <p>{contador}</p>
                <button onClick={restarContador}>-</button>
            </div>
            <p>Stock disponible: {stock}</p>

            {!carrito ?
                <button className='agregarCarrito' onClick={agregarCarrito} >Agregar al carrito</button>
                :
                <div className='botones'>
                    <button onClick={finalizaCompra} className='finalizarCompra' >Pasar a finalizar la compra</button>
                    <button onClick={seguirComprando} className='finalizarCompra'  >Continuar comprando!</button>
                </div>
                
            }
            
            <p>El precio total sera de $ <span>{compra}</span></p>
        </div>

        
    )
}

export default ItemCount