import React from 'react'
import Header from '../others/Header'
import Tasknumberlist from '../others/Tasknumberlist'
import Tasklist from '../tasklist/Tasklist'

function Employeedasboard(prop) {
  return (
    <>
    <div className="p-10 bg-[rgb(28,28,28)] h-screen ">
    <Header  changeuser={prop.changeuser} data={prop.data}  ></Header>
    <Tasknumberlist data={prop.data} ></Tasknumberlist>
    <Tasklist data={prop.data} ></Tasklist>
    </div>
    </>
  )
}

export default Employeedasboard