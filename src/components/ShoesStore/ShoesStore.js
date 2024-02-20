import React, { Component } from 'react'
import ProductList from './ProductList/ProductList'
import Cart from './Cart/Cart'

export default class ShoesStore extends Component {
  render() {
    return (
      <div className='container'>
        <ProductList/>

        <Cart/>
      </div>
    )
  }
}
