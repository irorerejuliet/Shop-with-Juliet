import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const {id} = useParams()
    const product = useSelector(state.product.products)
    const [proudct, setProduct] = useState()


    useEffect(() =>{
        const newProduct = products.find(product => product.id === id)
        setProduct(newProduct)
    }, [id])
  return (
    <div>
        {product.name}
      
    </div>
  )
}

export default ProductDetails
