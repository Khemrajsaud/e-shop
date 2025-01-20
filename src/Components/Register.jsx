import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div className='bg-white w-[400px] p-3 rounded-md'>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="">Name</label>
                <input className='w-full px-3 py-2 border' type="text" placeholder='Enter Name' />
            </div>
            <div>
                <label className='block text-gray-700' htmlFor="">Email</label>
                <input className='w-full px-3 py-2 border' type="text" placeholder='Enter Email' />
            </div>
            <div>
                <label className='block text-gray-700' htmlFor=""Password>Password</label>
                <input className='w-full px-3 py-2 border' type="password" placeholder='Enter Password'/>
            </div>
        
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Aleady Have an Account?</span>
            <button className='text-red-800' onClick={openLogin} >Login</button>
        </div>
      
    </div>
  )
}

export default Register
