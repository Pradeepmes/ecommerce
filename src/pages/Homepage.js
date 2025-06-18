import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//import Header from '../layout/Header';

import Menubar from '../components/Menubar';
import Herobanner from '../components/Herobanner';
import ProductSlider from '../components/ProductSlider';

const Homepage = () => {
    const navigate =useNavigate();

    useEffect(()=>{
        const token= localStorage.getItem('token')
        if(!token){
            navigate('/')
        }

    })
  
  
  
  return (
    <div>
    
    <Menubar/>
    <Herobanner/>
    <ProductSlider/>

  </div>
  )
}

export default Homepage
