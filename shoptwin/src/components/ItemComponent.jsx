import React from 'react'
import { useRef } from 'react';
import './ItemComponent.css'

function ItemComponent(props) {

  function test() {
    alert("Hola");
  }

  const ref = useRef();

  const buttonsRef = useRef()
  const buttonsRef2 = useRef()

  const handleClick = () => {
    ref.current.style.display = 'None'
  }

  const handleClick2 = () => {
    ref.current.style.opacity = '20%'
    buttonsRef.current.style.display = 'None'
    buttonsRef2.current.style.display = 'None'
  }

  return (
      <div className='container' ref={ref}>
        <div className='productName'>
          <h1>{props.name}</h1>
        </div>
        
        <div className='buttons'>
          <a href='#'>
            <img src={require('./icons/cancel.png')} onClick={handleClick} ref={buttonsRef2}/>
          </a>
          <a href="#">
            <img src={require('./icons/check-mark.png')} onClick={handleClick2} ref={buttonsRef}/>
          </a>
        </div>
      </div>
  )
}

export default ItemComponent
