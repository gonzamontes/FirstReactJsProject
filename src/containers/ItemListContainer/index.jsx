import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../../components/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
  
  const params = useParams();

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(()=> {

    const getProductos = async() => {
      try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setProductos(data);
      }catch(error) {
        console.log("Se produjo un error")
        console.log(error)
      }
    }

    getProductos()
  },[])

  useEffect(()=>{
    if (params?.categoryId){
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else{
      setProductosFiltrados(productos)
    }
    }, [params, productos])
  
  return (
    <div>
        {productos ?
        <ItemList products={productosFiltrados}/>
        :
        null
        }
    </div>
  )
}

export default ItemListContainer