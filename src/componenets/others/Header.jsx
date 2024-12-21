import React from 'react'

function Header(prop) {
    const logoutuser = ()=>{
        localStorage.setItem("loggedin" , "")
        prop.changeuser("")
    }
  return (
    <>
     <div className="header flex items-end justify-between" >
        <h1 className='text-2xl font-medium ' >Hello<br /> <span className='text-3xl'>{prop.data.name || "pta ni kon h "}</span></h1>
        <button onClick={logoutuser} className='bg-red-500 text-white px-5 py-2 rounded-lg  hover:bg-red-800'>Log out </button>
     </div>

    </>
  )
}

export default Header