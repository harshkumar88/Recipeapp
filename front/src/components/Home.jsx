import React from 'react'
import './Home.css'
import UpperHalf from './UpperHalf'
import InfoSection from './InfoSection'
const Home = () => {

  return (
    <>
      <div className='w-100  bg-light' style={{minHeight:"100vh"}}>
       <UpperHalf/>
       <InfoSection/>
      </div>

    </>
  )
}

export default Home