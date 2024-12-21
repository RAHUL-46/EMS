import React from "react";

function Tasklist({ data }) {
    
    
  return (
    <>
      <div
        id="tasklist"
        className="overflow-x-auto flex items-center justify-start py-5 mt-10 gap-6 h-[55%] w-full
    "
      >
        {data.tasks.map((elem) => {
         
          
          return <>
         
          
          <div  className=" bg-yellow-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl  bg-red-500 rounded font-semibold p-3">
              {elem.category}
            </h1>
            <h4 className="text-xl font-semibold">{elem.date}</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            {elem.title}
          </h2>
          <p className="text-[17px] mt-3">
            {elem.description}
          </p>
        </div>
        </>  
        })}

       {/* 
        <div className="bg-green-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl bg-red-500 rounded font-semibold p-1">
              High
            </h1>
            <h4 className="text-xl font-semibold">20 feb 2024</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            Make Youtube video
          </h2>
          <p className="text-[17px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque in quia atque, ab nesciunt.
          </p>
        </div>
        <div className="bg-blue-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl bg-red-500 rounded font-semibold p-1">
              High
            </h1>
            <h4 className="text-xl font-semibold">20 feb 2024</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            Make Youtube video
          </h2>
          <p className="text-[17px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque in quia atque, ab nesciunt.
          </p>
        </div>
        <div className="bg-purple-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl bg-red-500 rounded font-semibold p-1">
              High
            </h1>
            <h4 className="text-xl font-semibold">20 feb 2024</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            Make Youtube video
          </h2>
          <p className="text-[17px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque in quia atque, ab nesciunt.
          </p>
        </div>
        <div className="bg-red-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl bg-red-500 rounded font-semibold p-1">
              High
            </h1>
            <h4 className="text-xl font-semibold">20 feb 2024</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            Make Youtube video
          </h2>
          <p className="text-[17px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque in quia atque, ab nesciunt.
          </p>
        </div>
        <div className="bg-pink-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl bg-red-500 rounded font-semibold p-1">
              High
            </h1>
            <h4 className="text-xl font-semibold">20 feb 2024</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            Make Youtube video
          </h2>
          <p className="text-[17px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque in quia atque, ab nesciunt.
          </p>
        </div>
        <div className="bg-yellow-600 h-full w-[300px] p-5 flex-shrink-0 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl bg-red-500 rounded font-semibold p-1">
              High
            </h1>
            <h4 className="text-xl font-semibold">20 feb 2024</h4>
          </div>

          <h2 className="text-2xl font-semibold mt-2 text-black">
            Make Youtube video
          </h2>
          <p className="text-[17px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque in quia atque, ab nesciunt.
          </p>
        </div>
        */}
      </div>
    </>
  );
}

export default Tasklist;
