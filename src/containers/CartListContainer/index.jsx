import React, { useContext, useState } from 'react';
import './styles.css';
import Cart from '../Cart'
import { Shop } from '../../context/ShopContext';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom'
import guardarOrden from '../../utils/guardarOrden';

const CartListContainer = () => {
    
    const [active, setActive] = useState(false);
    const { cart } = useContext(Shop)
    const [nombreOrden, setNombreOrden ] = useState("")
    const [correoOrden, setCorreoOrden ] = useState("")
    const [numeroOrden, setNumeroOrden ] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    let listaDePrecios = []

    
    const navigate = useNavigate()

    const toggle = () => {
        setActive(!active)
    }

    const ordenGenerada = (nombre, correo, telefono, cart, total) => {
        return {
            buyer: {
                nombre: nombre,
                correo: correo,
                telefono: telefono
            },
            items: cart,
            total: total,
            createdAt: new Date().toLocaleString()
        }
    }

    const sumaDeActivos = () => {
        cart.map(producto => {
            listaDePrecios.push(producto.price*producto.quantity)
            setPrecioTotal(listaDePrecios.reduce((sum,value) => sum + value))
            console.log(precioTotal)
        })
        toggle()
    }

    const confirmarOrden = async () => {
        
        if (nombreOrden == '' || nombreOrden.length < 3){
            alert('Verificá los campos...')
        } else if (correoOrden == '' || correoOrden.length < 10){
            alert('El correo es requerido')
        } else if (numeroOrden == null || numeroOrden.length < 6){
            alert('El numero telefonico es requerido')
        }else{
            const orden = ordenGenerada(nombreOrden, correoOrden, numeroOrden , cart, precioTotal)
            guardarOrden(cart, orden)
            toggle()
        }
    }

    const seguirComprando = () => {
        navigate('/')
    }

    return (
        <>

            { (cart.length>0) ?
                <>  
                    <h1 className='tituloDeCarrito'>Tus productos:</h1>
                    <Cart></Cart>
                    <div className='div-orden'>
                        <button onClick={sumaDeActivos} className='enviar-orden' >Enviar orden</button>
                    </div>
                    
                    <Modal active={active} toggle={toggle}>
                        <h3 className='tituloModal'>Por favor complete todo los campos</h3>
                        <form className='formulario' onSubmit={ev => {
                            ev.preventDefault();
                            setCorreoOrden(ev.target.mail.value)
                            setNombreOrden(ev.target.nombre.value)
                            setNumeroOrden(ev.target.numero.value)
                        }}>
                            <label htmlFor="nombre">Ingrese su nombre:</label>
                            <input type="text" name='nombre' placeholder='Nombre' required/>
                            <label htmlFor="mail">Ingrese su email:</label>
                            <input type="email" name='mail' placeholder='Email' required/>
                            <label htmlFor="numero">Ingrese su telefono:</label>
                            <input type="number" name='numero' placeholder='Numero de telefono' required/>
                            <p className='total-a-pagar'>Total a pagar: ${precioTotal}</p>
                            <button type='submit' className='btnFinalizarCompra' onClick={confirmarOrden}> Finalizar compra </button>
                        </form>
                        
                    </Modal>
                    
                </>
                : 

                <>
                <div className='noProductosDiv'>
                    <h1 className='noHayProductos'> No hay productos :( </h1>
                    <button onClick={seguirComprando} className='seguirComprando' >Agregá algo!</button>
                </div> 
                    
                </>
                
            }

            
        </>
    
    )
}

export default CartListContainer