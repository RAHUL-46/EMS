import React from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import Taskinfo from "../others/Taskinfo";

function Admindasboard(prop) {
  return (
    <div className=" w-full h-screen p-7">


      <Header changeuser={prop.changeuser} data={prop.data}  ></Header>
      <Createtask></Createtask>
      <Taskinfo ></Taskinfo>

    
    </div>
  );
}

export default Admindasboard;
