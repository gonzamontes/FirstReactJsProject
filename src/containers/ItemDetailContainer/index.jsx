import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import ItemCount from '../../components/ItemCountt'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch ('https://fakestoreapi.com/products/1')
                const data = await response.json()
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }

        getProductos();
    }, [])

    return (
        
        <div>
            <ItemDetail product={productDetail}/>
            <ItemCount product={productDetail}/>
        </div>
        
    )
}

export default ItemDetailContainer