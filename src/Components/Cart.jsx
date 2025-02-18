
import React, { useState } from 'react';
import EmptyCart from '../assets/Images/emptyCart.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from './Modal';
import ChangeAddress from './ChangeAddress';
import { decreaseQuantity, increaseQuantity,  removeFromCart } from '../redux/cartSlice';
import {useNavigate} from "react-router-dom"

const Cart = () => {
    const cart = useSelector((state)=> state.cart)
    const [address, setAddress] = useState('main stret, 0012')

    const [isModelOpen, setIsModelOpen] = useState(false)
   
    const products = useSelector((state) => state.cart?.Products || []);
    console.log(products);

    const dispatch = useDispatch()
    const totalQuantity = products.reduce((acc,pruduct)=> acc+pruduct.quantity,0);
    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const navigate = useNavigate();
    

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            {products.length > 0 ? (
                <div>
                    <h3  className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                    <div className=' flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className=' md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>PRODUCT</p>
                                <div className='flex space-x-8'>
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                        
                    <div>
                        {products.map((product, index) => (
                            <div key={index} className='flex items-center justify-between p-3 border-b'>
                                <div>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                    <div className='flex-1 ml-4'>
                                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                                    </div>
                                </div>
                                <div className='flex space-x-12 items-center'>
                                    <p>${product.price}</p>
                                    <div className="flex items-center justify-center border">
                                        <button className='text-xl font-bold px-1.5 border-r' onClick={()=> dispatch(decreaseQuantity(product.id))}>-</button>
                                        <p>{product.quantity}</p>
                                        <button className='text-xl px-1 border-l' onClick={()=> dispatch(increaseQuantity(product.id))}>+</button>
                                    </div>
                                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                                    <button className='text-red-500 hover:text-red-700'>
                                        <FaTrashAlt onClick={()=>dispatch(removeFromCart(product.id))} />
                                    </button>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                  
                    <div className=' rounded-md shadow-lg p-4 '>
                        <h3>CART TOTAL</h3>
                        <div className='mb-4 border-b pb-2'>
                            <span>Total Items:</span>
                            <span>{totalQuantity}</span>
                        </div>
                        <div className='mb-4 border-b pb-2'>
                            <p>Shipping:</p>
                            <p>Shipping to:</p>
                            <span>{address}</span>
                            <button className='text-blue-500 hover:underline mt-1  ml-2'
                            onClick={()=> setIsModelOpen(true) }>change address</button>
                        </div>
                        <div>
                            <span >Total Price:{totalPrice}</span>
                            <span>{cart.totalPrice.toFixed()}</span>
                        </div>
                        <button 
                        className='bg-red-600 py-2 px-5'
                        onClick={()=> navigate('/checkout')}
                        
                        >Proced to checket</button>
                    </div>
                </div>
                <Modal
                isModelOpen = {isModelOpen}
                setIsModelOpen = {setIsModelOpen}
                >
                    <ChangeAddress setAddress ={setAddress} setIsModelOpen={setIsModelOpen}/>
                </Modal>
                </div>
            ) : (
                <div className="flex justify-center">
                    <img src={EmptyCart} alt="Empty Cart" className="h-96" />
                </div>
            )}
        </div>
    );
};

export default Cart;
