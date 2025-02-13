import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Login from './Components/Login'
import Cart from './Components/Cart'
import FilterData from './Pages/FilterData'
import Checkout from './Pages/Checkout'
import Order from './Pages/Order'


const App = () => {

  const [order,setOrder] = useState(null)
 
  return (
    <div>
      <Navbar/>
   
      
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
      <Route path='/order' element={<Order order={order}/>}/>
     
      <Route path='/filter-data' element={<FilterData/>}/>


     </Routes>
    
     <Footer/>
    </div>
  )
}

export default App





