import React, { createContext, useState } from 'react'

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        const productoRepetido = isInCart(producto)

        setCart([...cart, {...producto, quantity: cantidad}]);

        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...producto, quantity: cantidad}])
        }
            
    }

    const isInCart = (producto) => {
        return cart.find(e=> e.id === producto.id)
    }

    return (
        <Shop.Provider value={{cart, setCart, addItem}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider