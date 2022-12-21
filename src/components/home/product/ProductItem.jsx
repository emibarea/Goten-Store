import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { ADD } from '../../../controller/action'
import { Link } from 'react-router-dom'
export const ProductItem = ({ data }) => {
        const [openImage, setOpenImage] = useState(false)
    const [img, setimg] = useState("")
    const onOpenImage = (src) => {
        setimg(src)
        setOpenImage(true)
    }
    const dispatch = useDispatch()
    const addToCart = (e) => {
        dispatch(ADD(e))
    }
  return (
    <> 
    <div className='product_items'>
        {data.map(items => (
            <div className='box' key={items.id}>
                <div className="img" key={items.id}>
                    <img src={items.cover} alt="" key={items.id}/>
                   
                    <div className='overlay'>
                    <button className='button'>
                        <FiShoppingBag onClick={() => addToCart(items)} />
                    </button>
                    <Link to={`/details/${items.id}`}>
                    <button className='button'>
                    <AiOutlineInfoCircle onClick={() => addToCart(items)} />
                    </button>
                    </Link>
                    <button className='button' onClick={() => onOpenImage(items.cover)}>
                        <FiSearch />
                    </button>
                    </div>


                </div>
                <div className="details">

                <div className='overlay-mobile'>
                    <button className='button'>
                        <FiShoppingBag onClick={() => addToCart(items)} />
                    </button>
                    <Link to={`/details/${items.id}`}>
                    <button className='button'>
                    <AiOutlineInfoCircle onClick={() => addToCart(items)} />
                    </button>
                    </Link>
                    <button className='button' onClick={() => onOpenImage(items.cover)}>
                        <FiSearch />
                    </button>
                    </div>


                    <h3>{items.title}</h3>
                    <p>{items.author}</p>
                    <h4>Price: ${items.price}</h4>
                </div>
            </div>
        ))}
    </div>
    <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
            <img src={img} alt="" />
            <button className='button' onClick={() => setOpenImage(false)}>
                <AiOutlineClose />
            </button>
        </div>
    </div>
    </>
  )
}
