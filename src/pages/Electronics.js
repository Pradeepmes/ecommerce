import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Electronics = () => {
  const navigate =useNavigate();

    useEffect(()=>{
        const token= localStorage.getItem('token')
        if(!token){
            navigate('/')
        }

    })

  return (
    <div>
      electronics
    </div>
  )
}

export default Electronics
