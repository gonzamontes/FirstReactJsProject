import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import ItemCount from '../../components/ItemCountt'
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch (`https://fakestoreapi.com/products/${params.producId}`)
                const data = await response.json()
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }

        getProductos();
    }, [params])

    return (
        Object.keys(productDetail).length !==0 ?
        <div>
            <ItemDetail product={productDetail}/>
            <ItemCount product={productDetail}/>
        </div>
        :
        <p>Loading...</p>
    )
}

export default ItemDetailContainer