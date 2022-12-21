import React,{useState} from 'react'
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
export const SearchItems = ({value, product, onsearch}) => {
    const [openImage, setOpenImage] = useState(false)
    const [img, setimg] = useState("")
    const onOpenImage = (src) => {
        setimg(src)
        setOpenImage(true)
    }
  return (
    <>
    <section className='searchItems'>
    <div className="product_items">
    {product.filter(items => {
        const searchkey = value.toLowerCase()
        const title = items.title.toLowerCase()
        return searchkey && title.startsWith(searchkey) && title !== searchkey
    }).slice(0,10).map((items, i) => (
        <div className='box' key={i}>
                <div className="img">
                    <img src={items.cover} alt="" />
                    <div className='overlay'>
                    <button className='button'>
                        <FiShoppingBag />
                    </button>
                    <button className='button'>
                        <AiOutlineHeart />
                    </button>
                    <button className='button' onClick={() => onOpenImage(items.cover)}>
                        <FiSearch />
                    </button>
                    </div>
                </div>
                <div className="details">
                    <h3>{items.title}</h3>
                    <p>{items.author}</p>
                    <h4>Price: ${items.price}</h4>
                </div>
            </div>
    ))}
    </div>
    </section>
    </>
  )
}
