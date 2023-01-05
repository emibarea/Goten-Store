import React from 'react'
import Hero from './hero/Hero'
import { Product } from '../home/product/Product'
import {Banner} from './banner/Banner'
import { TopProduct } from './product/TopProduct'
export const Home = () => {
  return (
    <>
    <Hero />
    <Product />
    <Banner />
    {/* <TopProduct /> */}
    </>
  )
}
