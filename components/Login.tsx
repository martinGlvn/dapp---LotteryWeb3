import React from 'react'
import { useMetamask } from '@thirdweb-dev/react'

const Login = () => {

    const connectWithMetamask = useMetamask();

  return (
    <div className='bg-[#091b18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>

            <img 
                className='rounded-full h-56 w-56 mb-10'
                src="https://img.seadn.io/files/40733b383660d16c3bcea418ab9f326c.png?auto=format&fit=max&w=384" 
                alt="" 
            />
            <h1 className='text-6xl text-white font-bold'>THE MARTIN DRAW</h1>
            <h2 className='text-white'>Get Started By loggin in with your Metamask</h2>

            <button
                onClick={connectWithMetamask}
                className='bg-white px-8 py-5 mt-10 rounded-lg  shadow-lg font-bold'>
                Login with Metamask
            </button>
            
        </div>
    </div>
  )
}

export default Login