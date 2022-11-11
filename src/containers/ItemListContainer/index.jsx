import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../../components/ItemList'
import {useParams} from 'react-router-dom'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemListContainer = () => {
  
  const params = useParams();

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(()=> {

    const getProductos = async() => {
      try{

        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });
        
        // const response = await fetch('https://fakestoreapi.com/products')
        // const data = await response.json();

        setProductos(productos);
        setProductosFiltrados(productos)
        
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