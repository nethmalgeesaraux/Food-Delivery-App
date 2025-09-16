import React, { useState } from 'react'
import "./Home.css"
import Header from '../../component/Hearder/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'

const Home = () => {

  const[category,setCategory]=useState("All");


  return (
    <div>
        <Header/>
        <ExploreMenu category={category}setCategory={setCategory}/>
    </div>
  )
}

export default Home