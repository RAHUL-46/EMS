import React from 'react'

function Tasknumberlist({data}) {
   
    
  return (
    <>
     
    <div className=' flex  mt-10 justify-between gap-5 '>
        <div className=' w-[45%] bg-blue-600 rounded-xl py-6 px-9 '>
            <h2 className='text-3xl
             font-semibold'>{data.taskCounts.total}</h2>
            <h3 className='text-xl font-medium'>Total Task </h3>
        </div>

        <div className=' w-[45%] bg-yellow-600 rounded-xl py-6 px-9 '>
            <h2 className='text-3xl
             font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active</h3>
        </div>
        <div className=' w-[45%] bg-green-600 rounded-xl py-6 px-9 '>
            <h2 className='text-3xl
             font-semibold'>{data.taskCounts.complete}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className=' w-[45%] bg-red-600 rounded-xl py-6 px-9 '>
            <h2 className='text-3xl
             font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>


        </div>
        </>
  )
}

export default Tasknumberlist