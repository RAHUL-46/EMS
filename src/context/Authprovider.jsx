import React, { createContext, useState , useEffect } from 'react'
import { getlocalstorge, setlocalstorge } from '../utils/Localstorage'
import { data } from 'autoprefixer'

export const Authcontext = createContext()



const Authprovider = ({children}) => {

const [localdata, setlocaldata] = useState(null)

useEffect(() => {
   setlocalstorge()
   const {empdata , admindata} =  getlocalstorge()   // localstorage se data laake store kr liya localdata state m 
   setlocaldata({empdata , admindata})
   
}, [])








  

  return (
    <>
    <Authcontext.Provider value={[localdata , setlocaldata]}>
    <div>{children}</div>
    </Authcontext.Provider>
    

    </>
  )
}

export default Authprovider