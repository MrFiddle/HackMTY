import React from 'react'
import './InventoryItem.css'

function InventoryItem(props) {
  return (
    <div className='containerInvItem'>
        <div className='productName'>
          <h1>{props.name}</h1>
        </div>
    </div>
  )
}

export default InventoryItem
