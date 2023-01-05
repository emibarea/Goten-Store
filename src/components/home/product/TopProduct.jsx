import React, { useState } from "react"
import { products } from "../../assets/data/data"
import { Heading } from "../../common/Heading"
import { ProductItem } from "./ProductItem"

export const TopProduct = () => {
  const [cartItems, setCartItems] = useState(products)
  const allCategories = ["all", ...new Set(cartItems.map((item) => item.category))]
  const [category, setCategory] = useState(allCategories)


  const handleFilter = (category) => {
    const newItem = products.filter((item) => item.category === category)
    setCartItems(newItem)

    if (category === "all") {
      setCartItems(products)
      return
    }
  }
  return (
    <>
      <section className='topproduct' id='topproduct'>
        <div className='container'>
          <div className='head'>
            <Heading title='Top products' desc='Podes filtrarlos por categorias!' />
            <div className='category'>
              {category.map((category) => (
                <button className='button' onClick={() => handleFilter(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductItem data={cartItems} />
        </div>
      </section>
    </>
  )
}