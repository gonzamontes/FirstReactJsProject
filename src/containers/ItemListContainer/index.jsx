import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../../components/ItemList'

const ItemListContainer = () => {
  
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
  
  return (
    <div>
      <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer