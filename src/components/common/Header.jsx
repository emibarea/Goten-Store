import React from 'react'
import logo from '../assets/images/logo.png'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose, AiOutlineDelete} from 'react-icons/ai'
import { DELETE } from '../../controller/action'
import { navlist } from '../assets/data/data'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const  Header = () => {
    window.addEventListener('scroll' , function(){
        const header = this.document.querySelector('.header')
        header.classList.toggle('active', this.window.scrollY > 100)
    })
    const [mobile, setMobile] = useState(false)

    const getdata = useSelector((state) => state.cartReducer.carts)

    const [cartList, setCartList] = useState(false)
    const handleClose = () => {
        setCartList(null)
    }
    const dispatch = useDispatch()
    const delet = (id) => {
        dispatch(DELETE(id))
    }

    const [price, setPrice] = useState(0)

    const totals = () => {
        let price = 0;
        getdata.map((e,i) => {
            price = parseFloat(e.price) * e.qty + price
        })
        setPrice(price)
    }
    useEffect(() => {
        totals()
    }, [totals])
  return (
    <>
    <header className='header'>
        <div className='container'>
            <nav>
                <div className='toggle'>
                    <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose className='close heIcon'/> : <AiOutlineMenu className='open heIcon' /> }</button>
                </div>
                <div className='left'>
                    <img src={logo} alt="logo-goten-store" />
                </div>
                <div className='center'>
                    <ul className={mobile ? 'mobile-nav' : 'menu'}>
                        {navlist.map((nav, i) => (
                            <li key={i}>
                                <Link to={nav.path} onClick={() => mobile ? setMobile(false) : null }>
                                <a href={nav.direction}>{nav.text}</a>    
                                </Link>
 
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className='right'>
                <div className="right_card">
                    <button className='button' onClick={() => setCartList(!cartList)}>
                        <BsBagCheck className='shop hiIcon' />
                        . CARRO ({getdata.length})
                    </button>
                    <div className={cartList ? 'showCart' : "hideCart"}>
                        {getdata.length ? (
                        <section className='details'>
                            <div className="details_title">
                                <h3>Producto</h3>
                                <p>Informacion</p>
                            </div>
                            {getdata.map((e) => (
                                <div className="details_content">
                                    <div className="details_content_img">
                                        <Link to={`/details/${e.id}`} onClick={handleClose}>
                                            <img src={e.cover} alt='' />
                                        </Link>
                                    </div>
                                    <div className="details_content_detail">
                                        <div className="details_content_detail_price">
                                            <p>{e.title.slice(0,20)}...</p>
                                            <p>Precio : ${e.price}</p>
                                            <p>Cantidad : {e.qty}</p>
                                        </div>
                                    </div>
                                    <div className="details_content_detail_icon">
                                        <i onClick={() => delet(e.id)}>
                                            <AiOutlineDelete />
                                        </i>
                                    </div>
                                </div>
                            ))}
                            <div className="details_total">
                                <h4>Total : ${price}</h4>
                            </div>
                        </section>
                    ) : (
                        <div className="empty">
                            <p>Tu carrito esta vacio.</p>
                            <BsBagCheck className='shop hiIcon' />
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
const mapStateToProps = (state) => {
    return {
        amount : state.amount
    }
}
connect(mapStateToProps)(Header)