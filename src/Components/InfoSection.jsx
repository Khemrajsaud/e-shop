import React from 'react'
import { FaHeadset, FaShippingFast, FaMoneyBillWave,FaTag, FaClock } from "react-icons/fa";


const InfoSection = () => {

    const infoItems = [
        {
            icon: <FaShippingFast className="text-3xl text-red-600"/>,
            title: 'Free Shipping',
            description: "Get your order delivered with no extra cost"
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600"/>,
            title: 'Free Shipping',
            description: "Get your order delivered with no extra cost"
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-red-600"/>,
            title: 'Free Shipping',
            description: "Get your order delivered with no extra cost"
        },
        {
            icon: <FaClock className="text-3xl text-red-600"/>,
            title: 'Free Shipping',
            description: "Get your order delivered with no extra cost"
        },
        {
            icon: <FaTag className="text-3xl text-red-600"/>,
            title: 'Free Shipping',
            description: "Get your order delivered with no extra cost"
        },
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4 '>
            {infoItems.map((item, index)=>(
                <div className='flex flex-col items-center text-center p-4 border  bg-white rounded-lg shadow-md px-5 py-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer ' 
                key={index}>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default InfoSection
