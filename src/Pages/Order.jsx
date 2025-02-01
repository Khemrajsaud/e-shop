import React from 'react'
import { useNavigate } from 'react-router-dom';

const Order = ({order}) => {

    const navigate = useNavigate()
    if (!order) {
        return <p className='h-screen'>Order details are unavailable. Please try again later.</p>;
      }
  return (
    <div className=' container mx-auto py-8 px-4 md:px-16 lg:px-24 '>
        <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
        <p>your order has been placed successfully you will recieve an email conformation</p>
         <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
            <h3 className='text-lg font-semibold mb-2 '>order Summary</h3>
            <p>Order Number: {order.orderNumber}</p>
            <div mt-4>
                <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zip}</p>
            </div>
        
         <div className='mt-2'>
            <h3 className='text-md font-semibold mb-2'>
                Items Ordered
            </h3>
           
            {order?.products?.length > 0 ? (
       order.products.map((product, index) => (
    <div key={index}>
      <p>{product.name} x {product.quantity}</p>
      <p>{product.price} * {product.quantity}</p>
    </div>
    ))
        ) : (
  <p>No products ordered.</p>
        )}
            </div>
            <div className='mt-4 flex justify-between'>
                <span>Total Price</span>
                <span className='font-semibold'>{order.totalPrice}</span>
            </div>
            </div>
            <div className='flex items-center space-x-3'>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Shipping Tracking</button>
                <button onClick={()=> navigate('/')}  className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800'>contunue Shopping</button>
            </div>
      
    </div>
  )
}

export default Order
