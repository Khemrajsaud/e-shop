import React from 'react'

const Login = ({openSignUp}) => {
  return (
    <div className='bg-white rounded-md w-[350px] shadow-md p-3'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor=""Email>Email</label>
                <input className='w-full px-3 py-2 border' type="email" />
            </div>
            <div>
                <label className='block text-gray-700' htmlFor=""Password>Password</label>
                <input className='w-full px-3 py-2 border' type="password" />
            </div>
            <div className='my-4 flex items-center justify-between'>
                <label className='inline-flex items-center' htmlFor="">
                    <input type="checkbox" className=' ' />
                    <span className='ml-2 text-gray-700'>Remember Me</span>
                    <a className='text-red-700 ml-20' href="">Forget Password</a>
                </label>
            </div>
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Don't Have an Account?</span>
            <button className='text-red-800' onClick={openSignUp}>Sign UP</button>
        </div>
      
    </div>
  )
}

export default Login
