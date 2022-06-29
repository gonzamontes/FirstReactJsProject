import React from 'react'
import ItemCount from '../../components/ItemCountt'

const ItemListContainer = ({greeting}) => {
  
  const agregarCarrito = () => {
    console.log("se agrego al carrito")
  }
  
  return (
    <div>
        <p>{greeting}</p>
        <ItemCount agregarCarrito={agregarCarrito}/>
    </div>
  )
}

export default ItemListContainer