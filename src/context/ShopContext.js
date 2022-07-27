import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    
    // los items que aduirimos vienen a nuestro carrito 
    const [cart, setCart] = useState([])


    const addItem = (producto, cantidad) => {
        
        const productoRepetido = isInCart(producto)

        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...producto, quantity: cantidad}])
        }
            
    }

    const deleteItem = (producto) => {
        const productoAEliminar = isInCart(producto)

        if (productoAEliminar) {
            setCart(cart.filter((p => p.id !== producto.id)))
            console.log(cart.length)
            console.log("se ha eliminado " + producto.title)
        }
    }

    const reduceItem = (producto) => {
        
        const productoencarrito = isInCart(producto)
        
        if (productoencarrito && (productoencarrito.quantity >= 0)) {
            productoencarrito.quantity -= 1; 
            producto.stock += 1;
        }

    }
    
    const expandItem = (producto) => {
        
        const productoencarrito = isInCart(producto)
        
        if (productoencarrito && (producto.stock > 1)) {
            productoencarrito.quantity += 1;
            producto.stock -= 1;
            
        } else{
            alert("Alcanzaste el limite de stock!")
        }

    }

    const isInCart = (producto) => {
        return cart.find(e=> e.id === producto.id)
    }

    return (
        <Shop.Provider value={{ cart, setCart, addItem, deleteItem, reduceItem, expandItem }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider