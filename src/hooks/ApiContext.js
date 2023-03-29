import { useContext, useState,createContext } from "react"
import React from 'react'

   export const UserDetailContext = createContext()
const ApiContext=({children})=> {
    const [data, setData] = useState({});
  return ( 
  <UserDetailContext.Provider value={[data,setData]}>
        {children}
  </UserDetailContext.Provider>
  )
} 

export default ApiContext; 