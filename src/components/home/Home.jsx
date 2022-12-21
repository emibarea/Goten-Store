import React from 'react'
import { Card } from './hero/Card'
import Hero from './hero/Hero'
import { Product } from '../home/product/Product'
import {Banner} from './banner/Banner'
import { TopProduct } from './Top/TopProduct'
export const Home = () => {
  return (
    <>
    <Hero />
    {/* <Card /> */}
    <Product />
    <Banner />
    <TopProduct />
    </>
  )
}
