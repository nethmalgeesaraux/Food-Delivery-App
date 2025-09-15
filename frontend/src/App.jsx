import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/Place order/PlaceOrder'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Place order' element={<PlaceOrder/>}/>
      </Routes>

    </div>
  )
}

export default App