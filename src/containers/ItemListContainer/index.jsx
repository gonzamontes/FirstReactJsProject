import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCountt'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState(null)

  useEffect(()=> {

    const getProductos = async() => {
      try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data);
        setProductos(data);

      }catch(error) {
        console.log("Se produjo un error")
        console.log(error)
      }
    }

    getProductos()
  })

  const agregarCarrito = () => {
    console.log("se agrego al carrito")
  }
  
  return (
    <div>
        <p>{greeting}</p>
        <ItemCount agregarCarrito={agregarCarrito}/>
        {productos ?
        <ItemList products={productos}/>
        :
        null
        }
    </div>
  )
}

export default ItemListContainer