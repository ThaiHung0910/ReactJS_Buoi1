import React, { Component } from 'react'
import Item from './Item/Item'
import Modal from './Modal/Modal'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Item/>

        <Modal/>
      </div>
    )
  }
}
