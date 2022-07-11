import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import ItemCount from '../../components/ItemCountt'
import {useParams} from 'react-router-dom';
import './styles.css';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const params = useParams()

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch (`https://fakestoreapi.com/products/${params.productId}`)
                const data = await response.json()
                setProductDetail(data)
                console.log("el producto sera")
                console.log(productDetail)
            } catch (error) {
                console.log(error)
            }
        }

        getProductos();
    }, [params])

    return (
        
        Object.keys(productDetail).length !==0 ?
        <div>
            <ItemDetail product={productDetail} key={productDetail.id}/>
            <ItemCount product={productDetail} key={productDetail.id} />
        </div>
        
        :
        <div className='contenedorCargando'>
            <p className='cargando'>Cargando producto...</p>
        </div>
    )
}

export default ItemDetailContainer