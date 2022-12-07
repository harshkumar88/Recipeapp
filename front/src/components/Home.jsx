import React from 'react'
import UpperHalf from './UpperHalf'
import Lowerhalf from './Lowerhalf'
const Home = () => {


  return (
    <>
      <div className="bg-warning">
        <UpperHalf />
        <div style={{backgroundColor:"rgb(245,243,239)"}}>
        <Lowerhalf />
        </div>
      </div>
    </>
  )
}

export default Home