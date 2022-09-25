import { faHome } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBaby, faBoxes, faCreditCard} from '@fortawesome/free-solid-svg-icons'
import {faBoxesPacking} from '@fortawesome/free-solid-svg-icons'
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect} from 'react';
import './Inventory.css'
import InventoryItem from './InventoryItem';

function Inventory(props) {
  return (

    <div className='InventoryContainer'>
      <h1>Inventory | Pam Halpert</h1>
      <InventoryItem name = {'Pantalones corte chino ingleses'} />
      <InventoryItem name = {'Chaqueta de cuero'} />
      <InventoryItem name = {'Gabardina blanca'} />
      <InventoryItem name = "White and Wood Couch" />
      <InventoryItem name = "Ancient roman chair" />
      <InventoryItem name = "Magic lamp" />
      <a href="/" id='home'><FontAwesomeIcon icon={faHome} size="3x"/></a>
    </div>

  )
}

export default Inventory
