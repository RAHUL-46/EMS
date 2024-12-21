import React, { useState } from 'react'


function Login({loginhandler}) {
 
 
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const submit = (e) =>{

  e.preventDefault()
  loginhandler(email , password);
  setemail("")
  setpassword("")
  

  }
  return (
    <div className="flex h-screen w-screen justify-center items-center ">
        <div className="border-2 rounded-xl border-emerald-600 p-20">
            <form onSubmit={submit} className='flex flex-col items-center justify-center' >
                <input required type="email" className='  outline-none bg-transparent border-2 border-emerald-600 font-normal placeholder:text-gray-400 text-lg py-2 px-6 rounded-full  'placeholder='Enter Email' onChange={(e)=>{
                    setemail(e.target.value)
                }} value={email} />
                <input required type="password"  className='outline-none bg-transparent border-2 border-emerald-600 font-normal placeholder:text-gray-400 text-lg py-2 px-6 rounded-full mt-3  ' placeholder='Enter Password' onChange={(e)=>{
                    setpassword(e.target.value)
                }} value={password}/>
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-600 font-semibold bg-emerald-500 text-lg py-2 px-8 rounded-full '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login