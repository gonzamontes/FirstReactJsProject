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
    const [activos, setActivos] = useState(0)

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
        if (activos > 0){
            toggle()
        } else{
            cart.forEach(producto => setActivos(activos + (producto.price * producto.quantity)))
            toggle()
        }
    }

    const confirmarOrden = async () => {
        
        if (nombreOrden == '' || nombreOrden.length < 3){
            alert('El nombre es requerido')
        } else if (correoOrden == '' || correoOrden.length < 10){
            alert('El correo es requerido')
        } else if (numeroOrden == null || numeroOrden.length < 6){
            alert('El numero telefonico es requerido')
        }else{
            const orden = ordenGenerada(nombreOrden, correoOrden, numeroOrden , cart, activos)
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
                    <Cart></Cart>
                    <div className='div-orden'>
                        <button onClick={sumaDeActivos} className='enviar-orden' >Enviar orden</button>
                    </div>
                    <Modal active={active} toggle={toggle}>
                        <form className='formulario' onSubmit={ev => {
                            ev.preventDefault();
                            setCorreoOrden(ev.target.mail.value)
                            setNombreOrden(ev.target.nombre.value)
                            setNumeroOrden(ev.target.numero.value)
                        }}>
                            <input type="text" name='nombre' placeholder='Nombre' required/>
                            <input type="email" name='mail' placeholder='Email' required/>
                            <input type="number" name='numero' placeholder='Numero de telefono' required/>
                            <p>Total a pagar: ${activos}</p>
                            <button type='submit' onClick={confirmarOrden}> Finalizar compra </button>
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