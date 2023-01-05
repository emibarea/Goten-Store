import React, { useEffect, useState } from "react"
import { MdStarRate } from "react-icons/md"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action"
import { products } from "../../assets/data/data"

export const Details = () => {
  const [data, setData] = useState([])
  const { id } = useParams()

  //console.log(id)

  const getdata = useSelector((state) => state.cartReducer.carts)
  //console.log(getdata)
  
  function compare() {
    let compareData = getdata.filter((e) => {
      return e.id == id
    })
    setData(compareData)
  }

  useEffect(() => {
    compare()
  }, [id])

  // delete item
  const history = useHistory()
  const deletes = (id) => {
    dispatch(DELETE(id))
    history.push("/")
  }

  // increment item
  const dispatch = useDispatch()
  const increment = (e) => {
    dispatch(ADD(e))
  }
  // add cart
  const addToCart = (e) => {
    dispatch(ADD(e))
}

  // descriment item
  const decrement = (item) => {
    dispatch(REMOVE_INT(item))
  }
  console.log(data)
  return (
    <>
      <article>
        <section className='details'>
          <h2 className='details_title'>Detalles del Producto</h2>
          {data.map((item) => (
            <div className='details_content' key={item.id}>
              <div className='details_content_img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details_content_detail'>
                <h1>{item.title}</h1>
                <div className='rating'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <h3> ${item.price * item.qty}</h3>
                <div className='qty'>
                  <div className='count'>
                    <button onClick={item.qty <= 0 ? () => addToCart(item) : () => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={item.qty <= 0 ? () => deletes(item.id) : () => decrement(item)}>
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className='button'>COMPRAR</button>
                </div>
                <div className='desc'>
                  <h4>DESCRIPCION DEL PRODUCTO</h4>
                  <p>{item.description}</p>
                  <h4> PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p> Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}