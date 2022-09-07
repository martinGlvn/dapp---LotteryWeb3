import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader"

const Loading = () => {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>

        <img className='rounded-full h-20 w-20'
          src="https://img.seadn.io/files/40733b383660d16c3bcea418ab9f326c.png?auto=format&fit=max&w=384"
          alt="" 
        />

        <h1 className='text-lg text-white font-bold'>
            Loading the MARTIN DRAW
        </h1>

      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  )
}

export default Loading