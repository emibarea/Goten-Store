
import React, { useState } from 'react'
import { products } from '../../assets/data/data'
import { Heading } from '../../common/Heading'
import { ProductItem } from './ProductItem'
export const Product = () => {
    const [data, setData] = useState(products)
  return (
    <section className="product">
        <div className="container">
            <Heading title='Nuestros Productos' desc='Podes ver la informacion de los productos o agregarlos al carrito para continuar con tu proceso de compra.' />
            <ProductItem data={data} />
        </div>
    </section>
  )
}
