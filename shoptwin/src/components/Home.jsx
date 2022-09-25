import React from 'react'
import PriceContainer from './PriceContainer'
import ItemComponent from './ItemComponent'
import UserSettings from './UserSettings'
import './Home.css'

const data = [
    "Pantalones corte chino azules",
    "Chaqueta de cuero",
    "Playera básica negra",
    "Playera básica blanca",
    "Gabardina blanca"
]


function Home() {
  return (
    <div className='homeContainer'>
      <div className='userSettingsContainer'>
        <h1>Pam Halpert</h1>
        <UserSettings/>
      </div>
      <div className='homeItemsContainer'>
        <h1>Wallet</h1>
        <PriceContainer name = "1500.00"/>
        <h1>Pending purchases</h1>
        <ItemComponent name = {data[0]}/>
        <ItemComponent name = {data[1]}/>
        <ItemComponent name = {data[2]}/>
        <ItemComponent name = {data[3]}/>
        <ItemComponent name = {data[4]}/>
      </div>
    </div>
  )
}

export default Home
