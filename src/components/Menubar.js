import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/images/81zY7X7uIAL.jpg'

const Menubar = () => {
  return (
    <div className='main-container'>
            <div class="menu-container">
          <Link to="/electronics"><div class="item">
      <img src={img} alt="Image 2" />
      <p>Electronics</p>
    </div></Link>
    
    <div class="item">
      <img src={img} alt="Image 2" />
      <p>Beauty</p>
    </div>
    <div class="item">
      <img src={img} alt="Image 2" />
      <p>Sports</p>
    </div>
     <div class="item">
      <img src={img} alt="Image 2" />
      <p>Electronics</p>
    </div>
    <div class="item">
      <img src={img} alt="Image 2" />
      <p>Beauty</p>
    </div>
    <div class="item">
      <img src={img} alt="Image 2" />
      <p>Sports</p>
    </div>
    </div>
      
    </div>
  )
}

export default Menubar
