import React from 'react'

const Model = ({isModelOpen, setIsModelOpen, children}) => {
    if(!isModelOpen) return null;
  return  (
    <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center z-50'>
        <div className=' rounded-lg shadow-lg p-6 w-full max-w-md'>
<button className=' absolute top-4 right-9 text-gray-300 text-3xl' 
onClick={()=> setIsModelOpen(false)}>
    &times;
    </button>
        </div>
        {children}
      
    </div>
  )
}

export default Model
