import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { products } from './Home';
import { useNavigate } from 'react-router-dom';



const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPayment] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [shippingInfo, setShippinInfo] = useState(
        {
            address: "",
            city:"",
            zip: ""
        }
    )

  const navigate = useNavigate()

   const handleOrder = ()=>{
    const newOrder = {
        products: cart.products,
        orderNumber: "12355",
        shippingInformation: shippingInfo,
        totalPrice: cart.totalPrice
    };
    setOrder(newOrder)
    navigate('/order')

    
   }

    const cart = useSelector(state => state.cart)

    // const cart = useSelector((state) => state.cart || { product: [], totalPrice: 0 });



  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        <h1 className='text-2xl font-semibold mb-4'>Checkout</h1>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className=' md:w-2/3 '>

            <div className='border p-2 mb-6'>
                <div onClick={()=> setBillingToggle(!billingToggle)}>
                    <h3>BIlling Information</h3>
                    {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                </div>
                <div className={`${billingToggle ? "" : "hidden"}`}>                  
                    <div >
                        <label className=' block text-gray-700' htmlFor="">Name</label>
                        <input type="text"
                        placeholder='Enter Your Name'
                        className='w-full px-3 py-2 border'
                         />              
                </div>
                <div>                
                        <label htmlFor="">Email</label>
                        <input type="email"
                        name='email'
                        placeholder='Enter Email'                
                        className='w-full px-3 py-2 border'
                        />                  
                </div>
                <div>                  
                        <label htmlFor="">Phone</label>
                        <input type="text"
                        name='phone'
                        placeholder='Enter Phone #'
                        className='w-full px-3 py-2 border'
                        
                        />                      
                    </div>
                </div>              
            </div>    

                 {/* shipping */}
             <div className='border p-2 mb-6'>
                <div
                className='flex items-center justify-between'
                
                onClick={()=> setShippingToggle(!shippingToggle)}>
                    <h3>Shipping Information</h3>
                    {shippingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                </div>
                <div className={` space-y-4 ${shippingToggle ? "" : "hidden"}`}>                  
                    <div >
                        <label className=' block text-gray-700' htmlFor="">Address</label>
                        <input type="text"
                        placeholder='Enter Your Address'
                        className='w-full px-3 py-2 border'
                        onChange={(e)=> setShippinInfo({...shippingInfo,address:e.target.value})}
                         />              
                </div>
                <div>                
                        <label htmlFor="">City</label>
                        <input type="city"
                        name='text'
                        placeholder='Enter Your City'                
                        className='w-full px-3 py-2 border'
                        onChange={(e)=> setShippinInfo({...shippingInfo, city:e.target.value})}
                        />                  
                </div>
                <div>                  
                        <label htmlFor="">Zip Code</label>
                        <input type="text"
                        name='zip'
                        placeholder='Enter zip'
                        className='w-full px-3 py-2 border'
                        onChange={(e)=> setShippinInfo({...shippingInfo,address:zip.e.value})}
                        
                        />                      
                    </div>
                </div>              
            </div>   


           {/* payment method */}
            <div className='border p-2 mb-6'>
                <div
                className='flex items-center justify-between'
                
                onClick={()=> setPayment(!paymentToggle)}>
                    <h3>Payment Method</h3>
                    {paymentToggle ? <FaAngleDown/> : <FaAngleUp/>}
                </div>
                <div className={` space-y-4 ${paymentToggle ? "" : "hidden"}`}>                  
                  
                <div className='flex items-center mb-2 space-x-1' >
                        
                        <input type="radio"
                        name='payment'
                        checked={paymentMethod === "code"}
                        onChange={()=> setPaymentMethod("code")}
                      
                         />  
                         <label className=' block text-gray-700' htmlFor="">Cash and delivery</label>            
                </div>
                <div className='flex items-center mb-2 space-x-1' >
                        
                        <input type="radio"
                        name='payment'
                        checked={paymentMethod === "dc"}
                        onChange={()=> setPaymentMethod("dc")}
                      
                         />      
                         <label className=' block text-gray-700' htmlFor="">Debit Cart</label>        
                </div>
                
                </div> 
                {paymentMethod === "dc" && (
                    <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                        <h3 className='text-xl font-semibold mb-4'>Debid Card Informaton</h3>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Number</label>
                            <input
                             type="text" 
                             placeholder='Enter card number'
                             className='border p-2 w-full rounded'
                             required
                             
                             />
                        </div>
                        <div mb-4>
                            <label className='block text-gray-700 font-semibold mb-2'  htmlFor="">Card Holder Name</label>
                            <input type="text"
                            placeholder='Enter Card holder name'
                            className='border p-2 w-full rounded'
                            required
                            />
                        </div>
                        <div className='flex justify-between mb-4'>
                        <div className='w1/2 mr-2'>
                            <label className='block text-gray-700 font-semibold mb-2'  htmlFor="">Expire Date</label>
                            <input type="text"
                            placeholder='MM/YY'
                            className='border p-2 w-full rounded'
                            required
                            
                            />
                        </div>
                        <div className='w-1/2 ml-2'>
                            <label className='block text-gray-700 font-semibold mb-2'  htmlFor="">CW</label>
                            <input type="text"
                            placeholder='CW'
                            className='border p-2 w-full rounded'
                            required
                            
                            />
                        </div>
                    </div>
                    </div>

                )}             
            </div>       
            </div>
            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
            <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
            <div className='space-y-4'>
                {products.map((product) =>(
                    <div key={product.id} className='flex justify-between'>
                        <div className='flex items-center'>
                            <img className='w-16 h-16 object-contain rounded' src={product.image} alt="" />
                            <div className='ml-4'>
                                <h4 className=' text-md font-semibold '>{product.name}</h4>
                                <p className='text-gray-600'>&{product.price}*{product.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-4 border-t pt-4'>
                <div className='flex justify-between'>
                    <span>Total price</span>
                    <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
            onClick={handleOrder}
            >Place Order</button>
            
            </div>
        </div>    
    </div>
  )
}

export default Checkout
