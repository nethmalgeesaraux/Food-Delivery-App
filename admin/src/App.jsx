import React from 'react'
import Sidebar from './component/sidebar/Sidebar'
import Navbar from './component/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
      </div>
      
    </div>
  )
}

export default App