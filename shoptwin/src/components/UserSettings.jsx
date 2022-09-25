import React from 'react'
import './UserSettings.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBaby, faBoxes, faCreditCard} from '@fortawesome/free-solid-svg-icons'
import {faBoxesPacking} from '@fortawesome/free-solid-svg-icons'
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'

function UserSettings() {
  return (
    <div className='userSettingsContainer'>
      <div className='rectangleContainer'>
        <img src={require('./images/pam.webp')}/>
      </div>
      <div className='iconsRow'>
        <a href="###"><FontAwesomeIcon icon={faCreditCard} size="2x"/></a>
        <a href="/inventory"><FontAwesomeIcon icon={faBoxesPacking} size="2x"/></a>
        <a href="###"><FontAwesomeIcon icon={faFileInvoiceDollar} size="2x"/></a>
        <a href="/camera"><img src={require('./images/camera.png')} width="30%"/></a>
      </div>
    </div>
  )
}
 
export default UserSettings
