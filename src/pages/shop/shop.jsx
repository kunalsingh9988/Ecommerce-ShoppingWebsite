import React from 'react'
import PRODUCTS from '../../PRODUCTS'
import Product from './product'
import './shop.css'

const Shop = () => {
  return (
   <div className='shop'>
    <div className="shopTitle">
      <h1>Kunal Shop</h1>
    </div>
    <div className="products">
       {PRODUCTS.map((product)=>{
        return (
           <Product data={product}/>
        )
        
       })}
    </div>
   </div>
  )
}

export default Shop