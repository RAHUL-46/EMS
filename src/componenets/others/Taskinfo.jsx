import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider';

const Taskinfo = () => {

const [localdata , setlocaldata] = useContext(Authcontext);
console.log(localdata);






  return (
    <>
   
    <div className='    bg-[#1c1c1c] mt-5  p-4 rounded '>

    <div className='  flex justify-between mb-2 px-4 py-2 bg-red-800 rounded'>
        <h3   className=' font-extrabold  w-1/5 uppercase '>Employee</h3>
        <h3  className=' font-extrabold w-1/5 uppercase '>Total Tasks </h3>
        <h3  className=' font-extrabold w-1/5 uppercase'>Active</h3>
        <h3  className=' font-extrabold w-1/5 uppercase '>Competed</h3>
        <h3  className=' font-extrabold w-1/5 uppercase'>Failed</h3>

    </div>


    <div className="div">
    {localdata.empdata.map((elem)=>{
        return  <div className=' border-b-2 border-b-gray-500 flex justify-between mb-2 px-4 py-2 rounded'> 
        <h3   className=' font-semibold w-1/5 '>{elem.name}</h3>
        <h3  className=' font-semibold w-1/5   text-yellow-400 '>{elem.taskCounts.total} </h3>
        <h3  className=' font-semibold w-1/5  text-blue-600'>{elem.taskCounts.active}</h3>
        <h3  className=' font-semibold w-1/5  text-green-500'>{elem.taskCounts.complete}</h3>
        <h3  className=' font-semibold w-1/5  text-red-600'>{elem.taskCounts.failed}</h3>

    </div>
    })}
    </div>
       
       
    </div>
    </>
  )
}

export default Taskinfo