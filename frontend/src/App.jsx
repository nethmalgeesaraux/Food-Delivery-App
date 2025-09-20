import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/Place order/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
const App = () => {

  const[showLogin, setShowLogin] =useState(false)

  return (
    <>
    {showLogin? <LoginPopup setShowLogin ={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin ={setShowLogin}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Place order' element={<PlaceOrder/>}/>
      </Routes>

    </div>
    <Footer />
    
    </>
   
  )
}

export default App