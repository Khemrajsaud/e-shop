import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Login from './Components/Login'
import Cart from './Components/Cart'

const App = () => {
 
  return (
    <div>
      <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
     



     </Routes>
     <Footer/>
    </div>
  )
}

export default App





