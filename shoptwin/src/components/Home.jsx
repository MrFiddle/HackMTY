import React from 'react'
import PriceContainer from './PriceContainer'
import ItemComponent from './ItemComponent'
import UserSettings from './UserSettings'
import './Home.css'


function Home() {
  return (
    <div className='homeContainer'>
      <div className='userSettingsContainer'>
        <h1>Pam Halpert</h1>
        <UserSettings/>
      </div>
      <div className='homeItemsContainer'>
        <h1>Wallet</h1>
        <PriceContainer/>
        <h1>Pending purchases</h1>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
      </div>
    </div>
  )
}

export default Home
