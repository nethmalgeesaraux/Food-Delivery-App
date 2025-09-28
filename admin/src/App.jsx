import React from 'react'
import Sidebar from './component/sidebar/Sidebar'
import Navbar from './component/Navbar/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders' 

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element = {<Add/>}/>
          <Route path='/list' element = {<List/>}/>
           <Route path='/orders' element = {<Orders/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App