import React, { createContext } from 'react'
import { useEffect,useContext,useState } from 'react'

export const MobileContext = createContext()

export const MobileProvider = ({children}) => {

  const [allData, setAllData] = useState([]);

  useEffect(()=>{

    fetch('http://localhost:5000/mobiles')
    .then((res)=>res.json())
    .then((data)=>setAllData(data))
  },[])


  return (
   <MobileContext.Provider value={{allData,setAllData}}>
    {children}
   </MobileContext.Provider>
  
  )
}

