import React, { useState } from 'react'
import { Authcontext } from '../../context/Authprovider'
import { useContext } from 'react'

const Createtask = () => {

const [ localdata  , setlocaldata ] = useContext(Authcontext)

const [title, setTasktitle] = useState("")
const [date, setdate] = useState("")
const [assignto, setassignto] = useState("")
const [category, setcategory] = useState("")
const [description, setdiscription] = useState("")


  

const createtaskhandler = (e) =>{
    
    
    
    const task = {title , date , assignto , category ,description , active : true , failed : false ,  complete : false }
    
    
    e.preventDefault();
    
   const empdata = JSON.parse(localStorage.getItem("employee"))
    
    empdata.forEach((elem) => {
      
      if (assignto == elem.name) {
        
        elem.tasks.push(task)
        elem.taskCounts.total = elem.taskCounts.total + 1
        console.log(elem);
        
   
      } 
    })
    setlocaldata({empdata })
        localStorage.setItem("employee" , JSON.stringify(empdata)  )

   
  




    
    



    setTasktitle("")
    setdate("")
    setassignto("")
    setcategory("")
    setdiscription("");
    


}


  return (
    <>
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={createtaskhandler} className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Task Title</h3>
              <input onChange={(e)=>{
                  setTasktitle(e.target.value)
              }} value={title}
                className="text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Task Title" 
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Date</h3>
              <input onChange={(e)=>{
                  setdate(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                placeholder="date" value={date}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Assign To</h3>
              <input onChange={(e)=>{
                  setassignto(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Assign To" value={assignto}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold  text-gray-300 mb-0.5">Category</h3>
              <input onChange={(e)=>{
                  setcategory(e.target.value)
              }}
                className="text-sm  py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Category" value={category}
              />
            </div>
            </div>

            <div className="w-2/5 flex flex-col items-start">
                <h3 className=" text-sm font-semibold text-gray-300 mb-0.5"> Description
                     
                </h3>
                <textarea onChange={(e)=>{
                  setdiscription(e.target.value)
              }} className=" w-full text-sm py-2 px-4 h-44 outline-none   rounded-none bg-transparent border-[1px] border-gray-400 " name="" id="" value={description} placeholder='Type here.....'></textarea>

                <button className=" bg-emerald-600 hover:bg-emerald-800 px-5 rounded text-xl mt-4 w-full  font-semibold "> Create Task

                </button>
            </div>
            
          
        </form>
      </div>

    </>
  )
}

export default Createtask