import React from 'react'
import './ItemComponent.css'

function ItemComponent() {
  return (
      <div className='container'>
        <div className='productName'>
          <h1>Hola me la pelan</h1>
        </div>
        
        <div className='buttons'>
          <a href='#'>
            <img src={require('./icons/cancel.png')}/>
          </a>
          <a href="#">
            <img src={require('./icons/check-mark.png')}/>
          </a>
        </div>
      </div>
  )
}

export default ItemComponent
