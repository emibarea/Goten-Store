import React,{useState} from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'
import { SearchItems } from './SearchItems'
import {products} from '../../assets/data/data'
const Hero = () => {
  const [value, setvalue] = useState("")
  const onChange = (e) => {
    setvalue(e.target.value)
  }
  const onSearch = (key) => {
    setvalue(key)
  }
  return (
    <>
    <section className='hero'  >
    <div className="container" >
      <h1>
        <label><span>Bienvenido a</span> GOTEN STORE <span><FiShoppingBag style={{width: '20px', height: '20px'}}/></span></label>
        <br/>
        <label>¿Lo queres?<span> ¡Lo tenes!</span></label>
      </h1>
      <p>Tu nueva tienda favorita.</p>
        <div className='search'>
            <span>Categorias</span>
            <hr />
            <input type="text" placeholder='Busca Productos...' onChange={onChange} value={value} />
            <button onClick={() => onSearch(value)}>
                <BiSearch className="searchIcon heIcon" />
            </button>
        </div>
        <SearchItems product={products} value={value} onSearch={onSearch} />
            <p className='p-text'>Ejemplos: Auriculares, Rejoles, etc... </p>
    </div>
    </section>
    </>
  )
}

export default Hero