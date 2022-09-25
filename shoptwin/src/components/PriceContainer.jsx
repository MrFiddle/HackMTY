import React from 'react'
import './PriceContainer.css'

function PriceContainer(props) {
  return (
    <div className='containerPrice'>
      <h1>$ {props.name}mxn</h1>
    </div>
  )
}

export default PriceContainer
