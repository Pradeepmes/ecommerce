import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Menubar from '../components/Menubar'

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <Menubar/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout
