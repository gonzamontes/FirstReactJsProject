import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import {useParams} from 'react-router-dom';
import './styles.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const params = useParams()

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "products", params.productId)
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()){
                    const productDetail = {id: docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                } else {
                    alert("no such document");
                }

            } catch (error) {
                alert(error)
            }
        }

        getProductos();
    }, [params])



    return (
        
        Object.keys(productDetail).length !==0 ?
            <div>
                <ItemDetail product={productDetail} key={productDetail.id}/>
            </div>
        
        :
            <div className='contenedorCargando'>
                <p className='cargando'>Cargando producto...</p>
            </div>
    )
}

export default ItemDetailContainer